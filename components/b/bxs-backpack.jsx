import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l25j-x-4p.css';
import '../../css/z/z-9vsgwta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l25j-x-4p"/><path class="z-9vsgwta"/>`,
		"fallback": "bx:bxs-backpack",
	});
}

export default Component;
