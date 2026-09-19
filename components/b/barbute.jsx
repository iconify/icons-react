import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-8k-equk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-8k-equk"/>`,
		"fallback": "game-icons:barbute",
	});
}

export default Component;
