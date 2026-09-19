import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2sfabep.css';
import '../../css/n/nnbs2674t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2sfabep"/><path class="nnbs2674t"/>`,
		"fallback": "fxemoji:fishcakeswirl",
	});
}

export default Component;
