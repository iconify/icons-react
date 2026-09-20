import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjz5icctq.css';
import '../../css/l/lxjiu-1nv.css';
import '../../css/n/nqptvhois.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjz5icctq"/><path class="lxjiu-1nv"/><path clip-rule="evenodd" class="nqptvhois"/></g>`,
		"fallback": "streamline-color:dices-entertainment-gaming-dices-flat",
	});
}

export default Component;
