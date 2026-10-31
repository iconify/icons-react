import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g46ojlx0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g46ojlx0v"/>`,
		"fallback": "coolicons:arrow-turn-up-right-duotone-round",
	});
}

export default Component;
