import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwlwuqb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwlwuqb3b"/>`,
		"fallback": "boxicons:dock-bottom-left-alt-filled",
	});
}

export default Component;
