import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4t4632zq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4t4632zq"/>`,
		"fallback": "la:buy-n-large",
	});
}

export default Component;
