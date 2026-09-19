import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c42aj1b_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c42aj1b_j"/>`,
		"fallback": "game-icons:hammer-break",
	});
}

export default Component;
