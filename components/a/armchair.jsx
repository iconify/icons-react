import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi3dao0ht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi3dao0ht"/>`,
		"fallback": "game-icons:armchair",
	});
}

export default Component;
