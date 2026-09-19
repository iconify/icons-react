import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn-h29jjl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn-h29jjl"/>`,
		"fallback": "dashicons:beer",
	});
}

export default Component;
