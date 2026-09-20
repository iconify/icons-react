import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tglzdg4gb.css';
import '../../css/p/pwxvjvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tglzdg4gb"/><path class="pwxvjvbgu"/></g>`,
		"fallback": "si:bin-duotone",
	});
}

export default Component;
