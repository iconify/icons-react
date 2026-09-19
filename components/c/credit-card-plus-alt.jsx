import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh9o9fbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh9o9fbas"/>`,
		"fallback": "griddy-icons:credit-card-plus-alt",
	});
}

export default Component;
