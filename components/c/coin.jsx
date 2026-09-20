import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mi0gayb5c.css';
import '../../css/n/nmv9v_bkx.css';
import '../../css/f/fmr0e_lvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mi0gayb5c"/><path class="nmv9v_bkx"/><path class="fmr0e_lvo"/></g>`,
		"fallback": "reicon:coin",
	});
}

export default Component;
