import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95-ijf-n.css';
import '../../css/f/fxny2_b8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95-ijf-n"/><path class="fxny2_b8m"/>`,
		"fallback": "material-icon-theme:folder-app",
	});
}

export default Component;
