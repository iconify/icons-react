import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/ma38mbcuf.css';
import '../../css/n/nozftdbrr.css';
import '../../css/x/xhxh21-sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ma38mbcuf"/><path class="nozftdbrr"/><path class="xhxh21-sl"/></g>`,
		"fallback": "withicons-bauhaus:grid-2x2",
	});
}

export default Component;
