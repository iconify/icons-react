import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/goe3xfbbk.css';
import '../../css/f/flwjdpt_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="goe3xfbbk"/><path class="flwjdpt_w"/></g>`,
		"fallback": "streamline-ultimate:cash-payment-sign-2",
	});
}

export default Component;
