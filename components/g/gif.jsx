import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbhqbfbaz.css';
import '../../css/v/vskde4q_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbhqbfbaz"/><path class="vskde4q_i"/></g>`,
		"fallback": "mage:gif",
	});
}

export default Component;
