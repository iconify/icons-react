import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldv2_paun.css';
import '../../css/f/fxwld854u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ldv2_paun"/><path class="fxwld854u"/></g>`,
		"fallback": "streamline-ultimate:cashless-payment-online-statement-monitor",
	});
}

export default Component;
