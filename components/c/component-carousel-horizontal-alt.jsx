import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfop2ebsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfop2ebsu"/>`,
		"fallback": "griddy-icons:component-carousel-horizontal-alt",
	});
}

export default Component;
