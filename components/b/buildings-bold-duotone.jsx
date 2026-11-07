import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2j11xx0i.css';
import '../../css/f/ft03l-j3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2j11xx0i"/><path class="ft03l-j3k"/>`,
		"fallback": "solar:buildings-bold-duotone",
	});
}

export default Component;
