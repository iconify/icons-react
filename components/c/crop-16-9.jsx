import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa3-w-bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa3-w-bbn"/>`,
		"fallback": "tabler:crop-16-9",
	});
}

export default Component;
