import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqb5wb4we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqb5wb4we"/>`,
		"fallback": "tabler:box-align-top-left-filled",
	});
}

export default Component;
