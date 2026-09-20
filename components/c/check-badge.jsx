import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d687w0_kp.css';
import '../../css/i/iknt-lb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d687w0_kp"/><path class="iknt-lb2j"/></g>`,
		"fallback": "streamline-ultimate:check-badge",
	});
}

export default Component;
