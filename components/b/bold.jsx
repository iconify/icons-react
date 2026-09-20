import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi2j6qb-n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi2j6qb-n"/>`,
		"fallback": "wpf:bold",
	});
}

export default Component;
