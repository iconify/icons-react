import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3qadv63d.css';
import '../../css/p/p3nhuib5s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3qadv63d"/><path class="p3nhuib5s"/>`,
		"fallback": "energy-icons:arrow-down-to-line-20",
	});
}

export default Component;
