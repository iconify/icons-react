import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx5pt5wxs.css';
import '../../css/d/drdla2-9e.css';
import '../../css/w/wdin9-bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx5pt5wxs"/><circle class="drdla2-9e"/><circle class="wdin9-bzn"/>`,
		"fallback": "bx:bx-taxi",
	});
}

export default Component;
