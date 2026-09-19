import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft31dgr8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft31dgr8w"/>`,
		"fallback": "ci:arrow-undo-down-left",
	});
}

export default Component;
