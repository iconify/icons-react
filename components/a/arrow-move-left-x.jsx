import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3co_8lgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3co_8lgw"/>`,
		"fallback": "tabler:arrow-move-left-x",
	});
}

export default Component;
