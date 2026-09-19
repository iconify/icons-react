import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl25s0bgy.css';
import '../../css/r/r-n6f1bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl25s0bgy"/><path class="r-n6f1bae"/>`,
		"fallback": "boxicons:arrow-out-up-right-square-filled",
	});
}

export default Component;
