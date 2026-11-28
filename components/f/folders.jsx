import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k6062qpxe.css';
import '../../css/a/a5h0guzij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k6062qpxe"/><path class="a5h0guzij"/></g>`,
		"fallback": "iconaut:folders",
	});
}

export default Component;
