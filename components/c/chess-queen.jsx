import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii217uehi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii217uehi"/>`,
		"fallback": "game-icons:chess-queen",
	});
}

export default Component;
