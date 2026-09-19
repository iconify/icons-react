import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3ozll52o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3ozll52o"/>`,
		"fallback": "game-icons:foot-trip",
	});
}

export default Component;
