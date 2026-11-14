import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lzm7kvups.css';
import '../../css/a/a-z24ibwd.css';
import '../../css/k/kctaqhqoj.css';
import '../../css/q/q8ijdsmrx.css';
import '../../css/g/gb0ft43tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="lzm7kvups"/><circle class="a-z24ibwd"/><path class="kctaqhqoj"/><path class="q8ijdsmrx"/><path class="gb0ft43tq"/></g>`,
		"fallback": "evicons:bike-electric",
	});
}

export default Component;
