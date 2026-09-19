import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdntsb80a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdntsb80a"/>`,
		"fallback": "game-icons:evil-fork",
	});
}

export default Component;
