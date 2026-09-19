import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm699vahj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm699vahj"/>`,
		"fallback": "game-icons:archaeopteryx-fossil",
	});
}

export default Component;
