import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luw2295ii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luw2295ii"/>`,
		"fallback": "roentgen:gavel",
	});
}

export default Component;
