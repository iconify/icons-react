import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-k-7gbvo.css';
import '../../css/i/ivnpqujhz.css';
import '../../css/s/sps4d_myo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-k-7gbvo"/><path class="ivnpqujhz"/><path class="sps4d_myo"/>`,
		"fallback": "streamline-freehand:calendar-grid",
	});
}

export default Component;
