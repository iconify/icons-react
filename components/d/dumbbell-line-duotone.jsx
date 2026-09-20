import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/keq4rfk6c.css';
import '../../css/a/agockdsbo.css';
import '../../css/p/pa44c5jmb.css';
import '../../css/y/yo6u3gbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="keq4rfk6c"/><path class="agockdsbo"/><path class="pa44c5jmb"/><path class="yo6u3gbpx"/></g>`,
		"fallback": "solar:dumbbell-line-duotone",
	});
}

export default Component;
