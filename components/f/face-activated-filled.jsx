import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt8_cobrg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt8_cobrg"/>`,
		"fallback": "carbon:face-activated-filled",
	});
}

export default Component;
