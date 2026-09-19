import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_0vx1b5k.css';
import '../../css/q/qotpv-byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o_0vx1b5k"/><path class="qotpv-byw"/></g>`,
		"fallback": "hugeicons:call-missed-01",
	});
}

export default Component;
