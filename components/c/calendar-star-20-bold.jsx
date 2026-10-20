import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aum7pfzqi.css';
import '../../css/s/s19zwtb9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aum7pfzqi"/><path class="s19zwtb9q"/>`,
		"fallback": "energy-icons:calendar-star-20-bold",
	});
}

export default Component;
