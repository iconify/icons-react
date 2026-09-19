import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klpf-zbba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klpf-zbba"/>`,
		"fallback": "game-icons:cantua",
	});
}

export default Component;
