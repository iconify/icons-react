import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ustdt-b_z.css';
import '../../css/d/d35n-zt7v.css';
import '../../css/z/z1fo34bzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ustdt-b_z"/><path class="d35n-zt7v"/><path class="z1fo34bzu"/></g>`,
		"fallback": "streamline-plump-color:balloon",
	});
}

export default Component;
