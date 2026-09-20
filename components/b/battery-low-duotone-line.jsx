import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il4kzzmmk.css';
import '../../css/s/sfan7wb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="il4kzzmmk"/><path class="sfan7wb6g"/></g>`,
		"fallback": "lets-icons:battery-low-duotone-line",
	});
}

export default Component;
