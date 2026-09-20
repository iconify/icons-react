import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4_34evi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4_34evi"/>`,
		"fallback": "oi:clock",
	});
}

export default Component;
