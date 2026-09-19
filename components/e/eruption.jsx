import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3qe19hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb3qe19hc"/>`,
		"fallback": "game-icons:eruption",
	});
}

export default Component;
