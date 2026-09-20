import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ry8v7ffhn.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/x/xzx4xfb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ry8v7ffhn"/><circle class="h_tsn8bxt"/><path class="xzx4xfb6g"/></g>`,
		"fallback": "lucide:gauge-circle",
	});
}

export default Component;
