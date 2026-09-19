import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg6l1rb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg6l1rb4m"/>`,
		"fallback": "game-icons:at-sea",
	});
}

export default Component;
