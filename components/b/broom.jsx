import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dvzfih3uy.css';
import '../../css/y/y3-lsdbgx.css';
import '../../css/g/g6i-9h-_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dvzfih3uy"/><path class="y3-lsdbgx"/><path class="g6i-9h-_s"/></g>`,
		"fallback": "withicons-bauhaus:broom",
	});
}

export default Component;
