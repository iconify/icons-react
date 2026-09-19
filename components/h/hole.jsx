import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbd3g8bmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbd3g8bmn"/>`,
		"fallback": "game-icons:hole",
	});
}

export default Component;
