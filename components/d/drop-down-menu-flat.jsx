import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raidj0bjv.css';
import '../../css/t/trej22bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="raidj0bjv"/><path clip-rule="evenodd" class="trej22bll"/></g>`,
		"fallback": "streamline-sharp-color:drop-down-menu-flat",
	});
}

export default Component;
