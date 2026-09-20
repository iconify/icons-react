import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5jgrbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5jgrbcq"/>`,
		"fallback": "uil:cloud-slash",
	});
}

export default Component;
