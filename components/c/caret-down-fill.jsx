import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcq6a4frh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcq6a4frh"/>`,
		"fallback": "mage:caret-down-fill",
	});
}

export default Component;
