import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4cxb1bxe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4cxb1bxe"/>`,
		"fallback": "devicon-plain:discloud-wordmark",
	});
}

export default Component;
