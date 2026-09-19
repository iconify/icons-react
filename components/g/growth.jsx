import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-wxe198h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-wxe198h"/>`,
		"fallback": "game-icons:growth",
	});
}

export default Component;
