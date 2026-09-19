import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycc1cgbca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycc1cgbca"/>`,
		"fallback": "game-icons:crowned-explosion",
	});
}

export default Component;
