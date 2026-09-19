import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5c1m7t2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5c1m7t2n"/>`,
		"fallback": "game-icons:ak47",
	});
}

export default Component;
