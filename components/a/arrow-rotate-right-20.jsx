import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba2z7ll-z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba2z7ll-z"/>`,
		"fallback": "garden:arrow-rotate-right-20",
	});
}

export default Component;
