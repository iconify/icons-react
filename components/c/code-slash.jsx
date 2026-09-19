import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpuha0xak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpuha0xak"/>`,
		"fallback": "gg:code-slash",
	});
}

export default Component;
