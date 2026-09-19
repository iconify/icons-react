import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_0p5kbqs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_0p5kbqs"/>`,
		"fallback": "game-icons:boxing-glove-surprise",
	});
}

export default Component;
