import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziyq9ys9s.css';
import '../../css/q/qgoa3-pny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(.92099 0 0 .92169 -.41 .382)" class="ziyq9ys9s"/><path class="qgoa3-pny"/>`,
		"fallback": "catppuccin:cursor",
	});
}

export default Component;
