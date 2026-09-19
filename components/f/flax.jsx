import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhspo-6xc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhspo-6xc"/>`,
		"fallback": "game-icons:flax",
	});
}

export default Component;
