import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1nwiyybj.css';
import '../../css/r/rn6jppbhc.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q1nwiyybj"/><path class="rn6jppbhc"/><circle class="gp0egaclj"/></g>`,
		"fallback": "hugeicons:gold-buy",
	});
}

export default Component;
