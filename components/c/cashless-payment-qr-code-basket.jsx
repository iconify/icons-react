import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y555xkbow.css';
import '../../css/d/dqclsvbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y555xkbow"/><path class="dqclsvbtf"/></g>`,
		"fallback": "streamline-ultimate:cashless-payment-qr-code-basket",
	});
}

export default Component;
