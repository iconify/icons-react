import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvz4uc15p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvz4uc15p"/>`,
		"fallback": "game-icons:cancel",
	});
}

export default Component;
