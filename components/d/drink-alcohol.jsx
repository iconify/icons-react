import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw83f75la.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw83f75la"/>`,
		"fallback": "cil:drink-alcohol",
	});
}

export default Component;
