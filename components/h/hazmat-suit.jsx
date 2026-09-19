import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1r8egb9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1r8egb9f"/>`,
		"fallback": "game-icons:hazmat-suit",
	});
}

export default Component;
