import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjpxx4_bu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjpxx4_bu"/>`,
		"fallback": "game-icons:greaves",
	});
}

export default Component;
