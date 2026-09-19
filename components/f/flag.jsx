import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqb284kyh.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqb284kyh"/>`,
		"fallback": "ps:flag",
	});
}

export default Component;
