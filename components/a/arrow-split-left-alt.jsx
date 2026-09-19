import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbw23ubbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbw23ubbl"/>`,
		"fallback": "griddy-icons:arrow-split-left-alt",
	});
}

export default Component;
