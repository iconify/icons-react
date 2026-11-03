import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnjf8b6m.css';
import '../../css/m/m6o8i28jv.css';
import '../../css/u/uyhftacbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnjf8b6m"/><path class="m6o8i28jv"/><path class="uyhftacbi"/>`,
		"fallback": "material-icon-theme:folder-bruno",
	});
}

export default Component;
