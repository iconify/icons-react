import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbd2hib5l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbd2hib5l"/>`,
		"fallback": "picon:coffee",
	});
}

export default Component;
