import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aue9dtb6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aue9dtb6r"/>`,
		"fallback": "game-icons:beveled-star",
	});
}

export default Component;
