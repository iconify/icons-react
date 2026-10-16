import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo_phgozt.css';
import '../../css/c/c7-acjc4q.css';
import '../../css/n/n2-k-0btv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo_phgozt"/><path class="c7-acjc4q"/><path class="n2-k-0btv"/>`,
		"fallback": "energy-icons:ceiling-light-20-bold",
	});
}

export default Component;
