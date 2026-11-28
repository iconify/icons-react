import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spokbjbne.css';
import '../../css/t/tltjt5b_s.css';
import '../../css/b/b9rm32y0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="spokbjbne"/><path class="tltjt5b_s"/><path class="b9rm32y0x"/></g>`,
		"fallback": "iconaut:globe",
	});
}

export default Component;
