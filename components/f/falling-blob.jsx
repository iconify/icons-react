import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcsx5kbyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcsx5kbyb"/>`,
		"fallback": "game-icons:falling-blob",
	});
}

export default Component;
