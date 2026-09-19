import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfduo9w_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfduo9w_j"/>`,
		"fallback": "game-icons:bowling-strike",
	});
}

export default Component;
