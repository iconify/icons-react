import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7fybebel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7fybebel"/>`,
		"fallback": "game-icons:bug-net",
	});
}

export default Component;
