import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxk61cbxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxk61cbxm"/>`,
		"fallback": "game-icons:chaingun",
	});
}

export default Component;
