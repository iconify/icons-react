import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fra4ptb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fra4ptb_a"/>`,
		"fallback": "fa-brands:deploydog",
	});
}

export default Component;
