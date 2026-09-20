import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3p8q1brp.css';
import '../../css/x/xk0-y0bcj.css';
import '../../css/q/qv0m_7bit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3p8q1brp"/><path class="xk0-y0bcj"/><path class="qv0m_7bit"/>`,
		"fallback": "roentgen:bus-stop-sign-bus-stop-bench-bus-stop-shelter",
	});
}

export default Component;
