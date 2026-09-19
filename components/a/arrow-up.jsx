import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlxn4ublp.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlxn4ublp"/>`,
		"fallback": "fa6-solid:arrow-up",
	});
}

export default Component;
