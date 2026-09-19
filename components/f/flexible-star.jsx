import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_3p-cbxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_3p-cbxz"/>`,
		"fallback": "game-icons:flexible-star",
	});
}

export default Component;
