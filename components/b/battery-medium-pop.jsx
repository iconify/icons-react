import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/y/y_zt1ebxk.css';
import '../../css/y/yvuzu1c4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="y_zt1ebxk"/><path class="yvuzu1c4x"/></g>`,
		"fallback": "streamline-kameleon-color:battery-medium-pop",
	});
}

export default Component;
