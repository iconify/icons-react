import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tppfkg6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tppfkg6jc"/>`,
		"fallback": "token:diver",
	});
}

export default Component;
