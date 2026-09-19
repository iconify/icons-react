import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh2awlb8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh2awlb8n"/>`,
		"fallback": "game-icons:gem-chain",
	});
}

export default Component;
