import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzgn6nyji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzgn6nyji"/>`,
		"fallback": "game-icons:hot-surface",
	});
}

export default Component;
