import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpj87jb_q.css';
import '../../css/f/f-7sbkbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpj87jb_q"/><path class="f-7sbkbnc"/>`,
		"fallback": "carbon:accept-action-usage",
	});
}

export default Component;
