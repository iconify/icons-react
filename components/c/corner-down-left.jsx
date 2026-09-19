import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/my3z0ngsh.css';
import '../../css/h/h6nbuoyxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="my3z0ngsh"/><path class="h6nbuoyxe"/></g>`,
		"fallback": "icon-park:corner-down-left",
	});
}

export default Component;
