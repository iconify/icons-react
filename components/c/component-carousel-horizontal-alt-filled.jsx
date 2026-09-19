import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bel73sblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bel73sblq"/>`,
		"fallback": "griddy-icons:component-carousel-horizontal-alt-filled",
	});
}

export default Component;
