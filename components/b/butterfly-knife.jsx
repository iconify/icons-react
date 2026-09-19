import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/extb2-b3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="extb2-b3o"/>`,
		"fallback": "game-icons:butterfly-knife",
	});
}

export default Component;
