import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrf_6acoy.css';
import '../../css/h/hqopdobjp.css';
import '../../css/a/ainv9nbwz.css';
import '../../css/s/s90z_9bhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrf_6acoy"/><g class="hqopdobjp"><path class="ainv9nbwz"/><path class="s90z_9bhz"/></g>`,
		"fallback": "flat-color-icons:import",
	});
}

export default Component;
