import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j771fu0rl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j771fu0rl"/>`,
		"fallback": "devicon-plain:cairo-wordmark",
	});
}

export default Component;
