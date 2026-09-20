import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/y/yvsj4rbkk.css';
import '../../css/e/evxwsobhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="yvsj4rbkk"/><path class="evxwsobhc"/></g>`,
		"fallback": "lets-icons:check-ring-duotone-line",
	});
}

export default Component;
