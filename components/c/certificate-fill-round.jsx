import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oraqi0b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oraqi0b4j"/>`,
		"fallback": "coolicons:certificate-fill-round",
	});
}

export default Component;
