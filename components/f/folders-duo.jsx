import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vznrtdi4f.css';
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
		"content": `<path class="secondary vznrtdi4f"/><g class="dt0cm9dhy primary"><path class="k6062qpxe"/><path class="a5h0guzij"/></g>`,
		"fallback": "iconaut:folders-duo",
	});
}

export default Component;
