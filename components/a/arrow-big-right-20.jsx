import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2hg3_40q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2hg3_40q"/>`,
		"fallback": "energy-icons:arrow-big-right-20",
	});
}

export default Component;
