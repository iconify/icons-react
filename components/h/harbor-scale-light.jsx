import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw55blb_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw55blb_k"/>`,
		"fallback": "selfhst:harbor-scale-light",
	});
}

export default Component;
