import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9y7lbbej.css';
import '../../css/u/u45py-vnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9y7lbbej"/><path class="u45py-vnv"/>`,
		"fallback": "bx:bxs-add-to-queue",
	});
}

export default Component;
