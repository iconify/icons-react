import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_22bcyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc_22bcyc"/>`,
		"fallback": "game-icons:crypt-entrance",
	});
}

export default Component;
