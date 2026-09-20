import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqmlo2b7w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqmlo2b7w"/>`,
		"fallback": "simple-line-icons:chart",
	});
}

export default Component;
