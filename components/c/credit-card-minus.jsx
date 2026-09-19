import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qewfvq9oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qewfvq9oo"/>`,
		"fallback": "griddy-icons:credit-card-minus",
	});
}

export default Component;
