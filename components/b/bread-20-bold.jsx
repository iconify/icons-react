import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ndo13-j.css';
import '../../css/t/tyb8w2bjo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ndo13-j"/><path class="tyb8w2bjo"/>`,
		"fallback": "energy-icons:bread-20-bold",
	});
}

export default Component;
