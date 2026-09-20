import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc192ngyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc192ngyl"/>`,
		"fallback": "keyline-icons:arrow-up-dashed-panel",
	});
}

export default Component;
