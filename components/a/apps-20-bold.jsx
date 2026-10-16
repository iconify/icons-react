import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j23gzxbuv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j23gzxbuv"/>`,
		"fallback": "energy-icons:apps-20-bold",
	});
}

export default Component;
