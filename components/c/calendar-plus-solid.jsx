import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/x/x_-bf3btl.css';
import '../../css/g/gm241tb0d.css';
import '../../css/i/icsy_rbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="x_-bf3btl"/><path class="gm241tb0d"/><path class="icsy_rbek"/></g>`,
		"fallback": "iconoir:calendar-plus-solid",
	});
}

export default Component;
