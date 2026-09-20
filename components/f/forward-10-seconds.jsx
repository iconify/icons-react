import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_var8bmb.css';
import '../../css/i/i07s-k3qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a_var8bmb"/><path class="i07s-k3qf"/></g>`,
		"fallback": "reicon:forward-10-seconds",
	});
}

export default Component;
