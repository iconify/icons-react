import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p23qu-5zj.css';
import '../../css/f/fg-2q4b9c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p23qu-5zj"/><path class="fg-2q4b9c"/>`,
		"fallback": "material-icon-theme:go-mod",
	});
}

export default Component;
