import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mn62l3n5r.css';
import '../../css/y/yx6v_jgke.css';
import '../../css/c/cb8u71hty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mn62l3n5r"/><path class="yx6v_jgke"/><path class="cb8u71hty"/></g>`,
		"fallback": "hugeicons:camera-off-01",
	});
}

export default Component;
