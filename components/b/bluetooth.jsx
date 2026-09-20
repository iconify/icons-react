import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/w/wytfb-a8d.css';
import '../../css/b/bi6qt4scp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="wytfb-a8d"/><path class="bi6qt4scp"/></g>`,
		"fallback": "streamline-plump-color:bluetooth",
	});
}

export default Component;
