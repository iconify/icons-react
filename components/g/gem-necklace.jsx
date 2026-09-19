import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmc13sb2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmc13sb2n"/>`,
		"fallback": "game-icons:gem-necklace",
	});
}

export default Component;
