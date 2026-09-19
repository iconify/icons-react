import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvfqs5zsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvfqs5zsn"/>`,
		"fallback": "game-icons:graveyard",
	});
}

export default Component;
