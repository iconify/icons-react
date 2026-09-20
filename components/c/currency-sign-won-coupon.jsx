import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rsg5hubmf.css';
import '../../css/y/yjfjogb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rsg5hubmf"/><path class="yjfjogb0o"/></g>`,
		"fallback": "streamline-ultimate:currency-sign-won-coupon",
	});
}

export default Component;
