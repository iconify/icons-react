import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trn51nbmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trn51nbmj"/>`,
		"fallback": "game-icons:double-street-lights",
	});
}

export default Component;
