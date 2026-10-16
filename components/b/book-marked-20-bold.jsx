import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al5fry1wp.css';
import '../../css/e/eremc1y7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al5fry1wp"/><path class="eremc1y7b"/>`,
		"fallback": "energy-icons:book-marked-20-bold",
	});
}

export default Component;
