import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gap1wgzbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gap1wgzbf"/>`,
		"fallback": "game-icons:angel-outfit",
	});
}

export default Component;
