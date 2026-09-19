import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4g5dwuee.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4g5dwuee"/>`,
		"fallback": "ps:hearts-card",
	});
}

export default Component;
