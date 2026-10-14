import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppkq4dlxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppkq4dlxi"/>`,
		"fallback": "selfhst:conduyt-dark",
	});
}

export default Component;
