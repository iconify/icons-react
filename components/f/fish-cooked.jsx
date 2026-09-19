import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk980mb0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk980mb0q"/>`,
		"fallback": "game-icons:fish-cooked",
	});
}

export default Component;
