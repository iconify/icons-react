import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/enw8ysjww.css';
import '../../css/h/h8bd5tv9f.css';
import '../../css/l/lkb7etlcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="enw8ysjww"/><path class="h8bd5tv9f"/><path class="lkb7etlcq"/></g>`,
		"fallback": "icon-park-outline:connection-point",
	});
}

export default Component;
