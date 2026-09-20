import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdzx4fb0m.css';
import '../../css/r/rdyb-3bnh.css';
import '../../css/v/v9p7x7bnh.css';
import '../../css/t/trlxvac8s.css';
import '../../css/q/q7cfrmb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdzx4fb0m"/><path class="rdyb-3bnh"/><path class="v9p7x7bnh"/><path class="trlxvac8s"/><path class="q7cfrmb4k"/></g>`,
		"fallback": "streamline-freehand-color:color-crayon",
	});
}

export default Component;
