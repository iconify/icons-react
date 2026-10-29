import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/acho3yees.css';
import '../../css/q/qv7s7bn6a.css';
import '../../css/q/qi9le-b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="acho3yees"/><path class="qv7s7bn6a wm-a"/><path class="qi9le-b2c"/></g>`,
		"fallback": "withicons:ghost-duo",
	});
}

export default Component;
