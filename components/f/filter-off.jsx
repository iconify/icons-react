import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggj4h0b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggj4h0b2v"/>`,
		"fallback": "griddy-icons:filter-off",
	});
}

export default Component;
