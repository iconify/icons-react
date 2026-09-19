import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm0rkj2aq.css';
import '../../css/s/sjyb2qfru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm0rkj2aq"/><path class="sjyb2qfru"/>`,
		"fallback": "boxicons:earbuds",
	});
}

export default Component;
