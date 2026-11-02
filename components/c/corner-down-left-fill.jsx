import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhcfmqbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhcfmqbaj"/>`,
		"fallback": "mingcute:corner-down-left-fill",
	});
}

export default Component;
