import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_t41-uxm.css';
import '../../css/u/uwu1irugu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_t41-uxm"/><path class="uwu1irugu"/>`,
		"fallback": "material-icon-theme:folder-element",
	});
}

export default Component;
