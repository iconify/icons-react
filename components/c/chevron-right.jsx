import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wabqjwblq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wabqjwblq"/>`,
		"fallback": "icons8:chevron-right",
	});
}

export default Component;
