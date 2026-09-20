import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_-v2eb4y.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bubw39bqg.css';
import '../../css/t/t3ey99g_i.css';
import '../../css/v/v7i24ccdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGhvZ6idvA" class="h_-v2eb4y"/></defs><g class="ft5dv1b6b"><use href="#SVGhvZ6idvA"/><use href="#SVGhvZ6idvA"/><path class="bubw39bqg"/><path class="t3ey99g_i"/><path class="v7i24ccdt"/></g>`,
		"fallback": "streamline-cyber-color:cursor-choose",
	});
}

export default Component;
