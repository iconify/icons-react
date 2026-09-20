import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qet681b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qet681b4l"/>`,
		"fallback": "ri:fingerprint-2-line",
	});
}

export default Component;
