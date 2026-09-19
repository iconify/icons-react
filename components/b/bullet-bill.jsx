import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd_c-xb3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd_c-xb3l"/>`,
		"fallback": "game-icons:bullet-bill",
	});
}

export default Component;
