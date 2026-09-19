import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt968xbdq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt968xbdq"/>`,
		"fallback": "devicon-plain:codex",
	});
}

export default Component;
