import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofdlllb4o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofdlllb4o"/>`,
		"fallback": "academicons:hal-square",
	});
}

export default Component;
