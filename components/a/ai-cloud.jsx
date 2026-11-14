import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik-6j00zt.css';
import '../../css/z/z8zvko0_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ik-6j00zt"/><path class="z8zvko0_y"/></g>`,
		"fallback": "hugeicons:ai-cloud",
	});
}

export default Component;
