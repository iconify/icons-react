import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9ufisb4k.css';
import '../../css/t/t3wwm-c_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9ufisb4k"/><path class="t3wwm-c_d"/>`,
		"fallback": "energy-icons:building-20-bold",
	});
}

export default Component;
