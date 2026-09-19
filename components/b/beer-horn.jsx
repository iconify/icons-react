import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjee6g_jl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjee6g_jl"/>`,
		"fallback": "game-icons:beer-horn",
	});
}

export default Component;
