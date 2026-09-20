import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpb_2ob6c.css';
import '../../css/q/qmxsdqt7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qpb_2ob6c"/><path class="qmxsdqt7i"/></g>`,
		"fallback": "reicon:align-bottom3-filled",
	});
}

export default Component;
