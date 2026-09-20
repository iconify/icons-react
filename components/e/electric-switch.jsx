import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxlo8zbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxlo8zbaj"/>`,
		"fallback": "mdi:electric-switch",
	});
}

export default Component;
