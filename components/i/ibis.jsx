import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nla3em28f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nla3em28f"/>`,
		"fallback": "game-icons:ibis",
	});
}

export default Component;
