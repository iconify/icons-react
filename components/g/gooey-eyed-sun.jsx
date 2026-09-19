import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu1dbkyxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu1dbkyxf"/>`,
		"fallback": "game-icons:gooey-eyed-sun",
	});
}

export default Component;
