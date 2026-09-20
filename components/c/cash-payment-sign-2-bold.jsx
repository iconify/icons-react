import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2cpzg7mf.css';
import '../../css/a/al1qwvblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2cpzg7mf"/><path class="al1qwvblu"/>`,
		"fallback": "streamline-ultimate:cash-payment-sign-2-bold",
	});
}

export default Component;
