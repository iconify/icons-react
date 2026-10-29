import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gv_9_gb-f.css';
import '../../css/m/m205orxvc.css';
import '../../css/h/hu7ghyavu.css';
import '../../css/j/jtd8fdb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gv_9_gb-f wm-k"/><path class="m205orxvc wm-k"/><path class="hu7ghyavu wm-s"/><path class="jtd8fdb5m"/></g>`,
		"fallback": "withicons-bauhaus:holi-splash",
	});
}

export default Component;
