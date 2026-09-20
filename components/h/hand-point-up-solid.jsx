import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc3om3dtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc3om3dtg"/>`,
		"fallback": "la:hand-point-up-solid",
	});
}

export default Component;
