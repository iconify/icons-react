import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wha5l4bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wha5l4bvz"/>`,
		"fallback": "tabler:arrow-down-square-filled",
	});
}

export default Component;
