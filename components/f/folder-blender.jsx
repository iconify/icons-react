import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnjf8b6m.css';
import '../../css/h/hnt_a_4dv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnjf8b6m"/><path class="hnt_a_4dv"/>`,
		"fallback": "material-icon-theme:folder-blender",
	});
}

export default Component;
