import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0l1-gtup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0l1-gtup"/>`,
		"fallback": "thesvg-color:immer",
	});
}

export default Component;
