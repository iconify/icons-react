import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgm3qwbst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgm3qwbst"/>`,
		"fallback": "fa-brands:instalod",
	});
}

export default Component;
