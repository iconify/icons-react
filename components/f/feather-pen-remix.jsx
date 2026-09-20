import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qznw1qbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qznw1qbrf"/>`,
		"fallback": "streamline-sharp:feather-pen-remix",
	});
}

export default Component;
