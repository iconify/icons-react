import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4j9i0bcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4j9i0bcx"/>`,
		"fallback": "game-icons:glaive",
	});
}

export default Component;
