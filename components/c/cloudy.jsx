import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4ca86bnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4ca86bnz"/>`,
		"fallback": "cil:cloudy",
	});
}

export default Component;
