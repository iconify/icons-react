import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdoc90x5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdoc90x5k"/>`,
		"fallback": "boxicons:arrow-right",
	});
}

export default Component;
