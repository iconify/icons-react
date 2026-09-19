import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjije9bcz.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjije9bcz"/>`,
		"fallback": "fontisto:bower",
	});
}

export default Component;
