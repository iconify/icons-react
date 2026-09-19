import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln14l76-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln14l76-h"/>`,
		"fallback": "game-icons:clownfish",
	});
}

export default Component;
