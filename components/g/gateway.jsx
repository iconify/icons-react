import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac1ym9b_t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(-45 -120466.552 -49977.13)scale(96.7529)" class="ac1ym9b_t"/>`,
		"fallback": "bpmn:gateway",
	});
}

export default Component;
