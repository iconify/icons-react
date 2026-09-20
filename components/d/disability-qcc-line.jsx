import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh2_t1pnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kh2_t1pnc"/>`,
		"fallback": "streamline-freehand:disability-qcc-line",
	});
}

export default Component;
