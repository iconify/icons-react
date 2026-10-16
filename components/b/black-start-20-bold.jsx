import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn0um0h7v.css';
import '../../css/l/lpo20xysi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn0um0h7v"/><path class="lpo20xysi"/>`,
		"fallback": "energy-icons:black-start-20-bold",
	});
}

export default Component;
