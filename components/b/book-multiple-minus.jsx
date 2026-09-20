import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrfw7f0oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrfw7f0oc"/>`,
		"fallback": "mdi:book-multiple-minus",
	});
}

export default Component;
