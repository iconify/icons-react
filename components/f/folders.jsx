import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zbv0h6bgp.css';
import '../../css/e/e_hvle-fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zbv0h6bgp"/><path class="e_hvle-fh wm-a"/></g>`,
		"fallback": "withicons:folders",
	});
}

export default Component;
