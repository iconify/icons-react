import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpd_n5uta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpd_n5uta"/>`,
		"fallback": "game-icons:full-metal-bucket",
	});
}

export default Component;
