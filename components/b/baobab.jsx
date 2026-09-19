import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgmz_5ssx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgmz_5ssx"/>`,
		"fallback": "game-icons:baobab",
	});
}

export default Component;
