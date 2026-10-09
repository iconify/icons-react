import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8i01qb4b.css';
import '../../css/z/z5m9jtb4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8i01qb4b"/><path class="z5m9jtb4y"/>`,
		"fallback": "energy-icons:chevrons-up-20",
	});
}

export default Component;
