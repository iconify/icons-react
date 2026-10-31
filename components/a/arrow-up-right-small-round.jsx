import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb7dkx9rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb7dkx9rl"/>`,
		"fallback": "coolicons:arrow-up-right-small-round",
	});
}

export default Component;
