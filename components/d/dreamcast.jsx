import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpb8y2bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpb8y2bpb"/>`,
		"fallback": "cbi:dreamcast",
	});
}

export default Component;
