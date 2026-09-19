import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyx608bup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyx608bup"/>`,
		"fallback": "game-icons:electrical-resistance",
	});
}

export default Component;
