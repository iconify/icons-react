import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it-6mlbhr.css';
import '../../css/b/bckx04b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it-6mlbhr"/><path clip-rule="evenodd" class="bckx04b0b"/>`,
		"fallback": "solar:backpack-outline",
	});
}

export default Component;
