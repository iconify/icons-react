import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvb62whh.css';
import '../../css/f/fb_vjebgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvb62whh"/><path class="fb_vjebgt"/>`,
		"fallback": "material-icon-theme:folder-mail",
	});
}

export default Component;
