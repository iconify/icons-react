import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi-ee_d_q.css';
import '../../css/i/i9aia1bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi-ee_d_q"/><path clip-rule="evenodd" class="i9aia1bgu"/>`,
		"fallback": "lineicons:expressjs",
	});
}

export default Component;
