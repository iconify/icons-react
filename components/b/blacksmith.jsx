import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iscl_zfgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iscl_zfgu"/>`,
		"fallback": "game-icons:blacksmith",
	});
}

export default Component;
