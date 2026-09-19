import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urmq5bc6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urmq5bc6d"/>`,
		"fallback": "ps:girl-angry",
	});
}

export default Component;
