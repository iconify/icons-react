import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhx6xt5an.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhx6xt5an"/>`,
		"fallback": "bi:headphones",
	});
}

export default Component;
