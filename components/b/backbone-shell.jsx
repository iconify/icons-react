import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6quovps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd6quovps"/>`,
		"fallback": "game-icons:backbone-shell",
	});
}

export default Component;
