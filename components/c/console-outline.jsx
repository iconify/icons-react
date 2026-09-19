import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg52a2w4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg52a2w4g"/>`,
		"fallback": "bitcoin-icons:console-outline",
	});
}

export default Component;
