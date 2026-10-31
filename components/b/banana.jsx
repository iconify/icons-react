import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q11bnobfu.css';
import '../../css/l/lec51cbbz.css';
import '../../css/i/ipk8v9b_s.css';
import '../../css/c/cq97wwbdy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q11bnobfu"/><path class="lec51cbbz"/><path class="ipk8v9b_s"/><path class="cq97wwbdy"/>`,
		"fallback": "iconito:banana",
	});
}

export default Component;
