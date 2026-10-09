import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ripftlb_v.css';
import '../../css/h/hwfolek5p.css';
import '../../css/i/i07ips82d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ripftlb_v"/><path class="hwfolek5p"/><path class="i07ips82d"/>`,
		"fallback": "energy-icons:hot-water-20-bold",
	});
}

export default Component;
