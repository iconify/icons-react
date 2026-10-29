import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gt83y5bri.css';
import '../../css/s/sq05rk26a.css';
import '../../css/o/o54drfbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gt83y5bri"/><path class="sq05rk26a"/><path class="o54drfbmd"/></g>`,
		"fallback": "withicons-bauhaus:firecracker",
	});
}

export default Component;
