import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s2wl61vvr.css';
import '../../css/x/x5zw6sbwv.css';
import '../../css/r/rxl27eg2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s2wl61vvr"/><path class="x5zw6sbwv"/><path class="rxl27eg2m"/></g>`,
		"fallback": "streamline-freehand-color:cloud-gaming-service",
	});
}

export default Component;
