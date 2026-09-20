import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tf6i70b4y.css';
import '../../css/n/noyct1bbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tf6i70b4y"/><path class="noyct1bbt"/></g>`,
		"fallback": "si:bus-duotone",
	});
}

export default Component;
