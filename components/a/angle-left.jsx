import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz_e4bjlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz_e4bjlc"/>`,
		"fallback": "prime:angle-left",
	});
}

export default Component;
