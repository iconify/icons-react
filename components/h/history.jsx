import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxe6p1gov.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxe6p1gov"/>`,
		"fallback": "jam:history",
	});
}

export default Component;
