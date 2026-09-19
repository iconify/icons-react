import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgxd4gqfq.css';
import '../../css/i/iaz7k-bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgxd4gqfq"/><path class="iaz7k-bdn"/>`,
		"fallback": "bx:door-open",
	});
}

export default Component;
