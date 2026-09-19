import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0k5ecb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b0k5ecb0b"/>`,
		"fallback": "griddy-icons:credit-card-check-alt",
	});
}

export default Component;
