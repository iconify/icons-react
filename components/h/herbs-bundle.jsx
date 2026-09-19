import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo4-ahbkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo4-ahbkf"/>`,
		"fallback": "game-icons:herbs-bundle",
	});
}

export default Component;
