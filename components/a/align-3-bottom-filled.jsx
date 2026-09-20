import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dlo45vb0d.css';
import '../../css/w/wr5x_8_fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="dlo45vb0d"/><rect class="wr5x_8_fb"/></g>`,
		"fallback": "reicon:align-3-bottom-filled",
	});
}

export default Component;
