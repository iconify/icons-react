import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsz1cbpjo.css';
import '../../css/u/uslk2qj5v.css';
import '../../css/q/quppf3-iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hsz1cbpjo"/><path class="uslk2qj5v"/><path class="quppf3-iq"/></g>`,
		"fallback": "streamline-ultimate:earth-setting",
	});
}

export default Component;
