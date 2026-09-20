import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn2rj9k1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn2rj9k1n"/>`,
		"fallback": "roentgen:bench-no-backrest",
	});
}

export default Component;
