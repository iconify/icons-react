import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox9ffzb9n.css';
import '../../css/o/otxlapboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ox9ffzb9n"/><path class="otxlapboz"/>`,
		"fallback": "stash:data-boolean",
	});
}

export default Component;
