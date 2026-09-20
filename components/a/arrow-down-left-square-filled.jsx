import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu56-l6qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu56-l6qp"/>`,
		"fallback": "reicon:arrow-down-left-square-filled",
	});
}

export default Component;
