import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4b_j2glt.css';
import '../../css/h/ho_37qg1k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4b_j2glt"/><path class="ho_37qg1k"/>`,
		"fallback": "material-icon-theme:folder-obsidian",
	});
}

export default Component;
