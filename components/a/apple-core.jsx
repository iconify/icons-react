import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdlk1kkcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdlk1kkcc"/>`,
		"fallback": "game-icons:apple-core",
	});
}

export default Component;
