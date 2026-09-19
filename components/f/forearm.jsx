import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj-wy4bpk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj-wy4bpk"/>`,
		"fallback": "game-icons:forearm",
	});
}

export default Component;
