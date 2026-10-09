import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwodvgbiu.css';
import '../../css/i/ip3sjpwvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwodvgbiu"/><path class="ip3sjpwvs"/>`,
		"fallback": "energy-icons:book-open-20-bold",
	});
}

export default Component;
