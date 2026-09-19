import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr0t2jb7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr0t2jb7z"/>`,
		"fallback": "game-icons:card-2-hearts",
	});
}

export default Component;
