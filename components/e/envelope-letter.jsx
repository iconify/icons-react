import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iky9k_b7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iky9k_b7f"/>`,
		"fallback": "cil:envelope-letter",
	});
}

export default Component;
