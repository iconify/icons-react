import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffkma_bxg.css';
import '../../css/o/ob3ntmvsq.css';
import '../../css/h/hntz4fq6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffkma_bxg"/><path class="ob3ntmvsq"/><circle class="hntz4fq6i"/>`,
		"fallback": "bx:bx-rss",
	});
}

export default Component;
