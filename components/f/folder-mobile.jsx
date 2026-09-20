import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvb62whh.css';
import '../../css/p/pzyrpx0do.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvb62whh"/><path class="pzyrpx0do"/>`,
		"fallback": "material-icon-theme:folder-mobile",
	});
}

export default Component;
