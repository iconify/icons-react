import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg1pd4bom.css';
import '../../css/o/o9u2ibbix.css';
import '../../css/l/llirq21ot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg1pd4bom"/><path class="o9u2ibbix"/><path class="llirq21ot"/>`,
		"fallback": "energy-icons:bag-plus-20-bold",
	});
}

export default Component;
