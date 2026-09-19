import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-i6v9_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-i6v9_w"/>`,
		"fallback": "game-icons:frog-foot",
	});
}

export default Component;
