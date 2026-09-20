import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb13_846r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb13_846r"/>`,
		"fallback": "mdi:alphabet-g-circle",
	});
}

export default Component;
