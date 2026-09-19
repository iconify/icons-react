import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe9si9r_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe9si9r_r"/>`,
		"fallback": "game-icons:coiling-curl",
	});
}

export default Component;
