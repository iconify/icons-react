import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1uh9dfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1uh9dfq"/>`,
		"fallback": "game-icons:empty-wood-bucket-handle",
	});
}

export default Component;
