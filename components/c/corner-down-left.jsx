import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w3q64n2xd.css';
import '../../css/l/llygx5dpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w3q64n2xd"/><path class="llygx5dpv"/></g>`,
		"fallback": "matita:corner-down-left",
	});
}

export default Component;
