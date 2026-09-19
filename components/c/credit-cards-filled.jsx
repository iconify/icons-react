import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm6q69bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gm6q69bfq"/>`,
		"fallback": "griddy-icons:credit-cards-filled",
	});
}

export default Component;
