import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp55kxb4q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp55kxb4q"/>`,
		"fallback": "dashicons:database-import",
	});
}

export default Component;
