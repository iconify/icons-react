import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xot8q8bqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xot8q8bqy"/>`,
		"fallback": "game-icons:brain",
	});
}

export default Component;
