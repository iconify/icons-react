import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahridsb8p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahridsb8p"/>`,
		"fallback": "at-icons:arrow-turn-down-right",
	});
}

export default Component;
