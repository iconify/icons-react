import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3s5ci-4o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3s5ci-4o"/>`,
		"fallback": "ep:dish-dot",
	});
}

export default Component;
