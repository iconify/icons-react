import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vupb9bbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vupb9bbru"/>`,
		"fallback": "iconamoon:do-undo-thin",
	});
}

export default Component;
