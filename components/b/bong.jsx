import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/digezob-c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="digezob-c"/>`,
		"fallback": "fa6-solid:bong",
	});
}

export default Component;
