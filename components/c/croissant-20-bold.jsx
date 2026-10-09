import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvo2ojb3s.css';
import '../../css/h/hhfof8-2l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvo2ojb3s"/><path class="hhfof8-2l"/>`,
		"fallback": "energy-icons:croissant-20-bold",
	});
}

export default Component;
