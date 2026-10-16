import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6c9yjbgf.css';
import '../../css/p/po1u_tchm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6c9yjbgf"/><path class="po1u_tchm"/>`,
		"fallback": "energy-icons:battery-prismatic-20",
	});
}

export default Component;
