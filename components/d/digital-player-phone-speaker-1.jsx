import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cd4u-jotd.css';
import '../../css/q/qnyzqcjhg.css';
import '../../css/v/vrr2_qbuw.css';
import '../../css/i/i4mws0pjo.css';
import '../../css/f/f__1e-wap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cd4u-jotd"/><path class="qnyzqcjhg"/><path class="vrr2_qbuw"/><path class="i4mws0pjo"/><path class="f__1e-wap"/></g>`,
		"fallback": "streamline-freehand-color:digital-player-phone-speaker-1",
	});
}

export default Component;
