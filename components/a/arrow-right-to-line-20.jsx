import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3z3e5bjw.css';
import '../../css/q/qqzqv2f4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3z3e5bjw"/><path class="qqzqv2f4b"/>`,
		"fallback": "energy-icons:arrow-right-to-line-20",
	});
}

export default Component;
