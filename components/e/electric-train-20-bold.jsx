import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksqnkb31x.css';
import '../../css/p/pam77ibjf.css';
import '../../css/p/paihgnbuy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksqnkb31x"/><path class="pam77ibjf"/><path class="paihgnbuy"/>`,
		"fallback": "energy-icons:electric-train-20-bold",
	});
}

export default Component;
