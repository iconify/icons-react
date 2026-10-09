import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnqtbnznq.css';
import '../../css/h/hq96i1lwn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnqtbnznq"/><path class="hq96i1lwn"/>`,
		"fallback": "energy-icons:alarm-clock-20-bold",
	});
}

export default Component;
