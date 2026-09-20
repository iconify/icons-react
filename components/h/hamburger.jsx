import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtuub5bec.css';
import '../../css/q/q25epd9ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtuub5bec"/><path class="q25epd9ri"/></g>`,
		"fallback": "tdesign:hamburger",
	});
}

export default Component;
