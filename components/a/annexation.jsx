import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxt-t0hgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxt-t0hgu"/>`,
		"fallback": "game-icons:annexation",
	});
}

export default Component;
