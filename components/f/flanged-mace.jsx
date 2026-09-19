import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y94-w7z3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y94-w7z3w"/>`,
		"fallback": "game-icons:flanged-mace",
	});
}

export default Component;
