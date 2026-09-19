import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygl6n1i5a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygl6n1i5a"/>`,
		"fallback": "academicons:academia-square",
	});
}

export default Component;
