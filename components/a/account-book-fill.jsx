import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djrt-nrht.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djrt-nrht"/>`,
		"fallback": "ant-design:account-book-fill",
	});
}

export default Component;
