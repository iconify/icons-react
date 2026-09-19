import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpf0jtqvy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpf0jtqvy"/>`,
		"fallback": "game-icons:barefoot",
	});
}

export default Component;
