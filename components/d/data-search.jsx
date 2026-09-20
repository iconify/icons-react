import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvo4h4bhf.css';
import '../../css/q/q0ek5bc3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gvo4h4bhf"/><path class="q0ek5bc3g"/></g>`,
		"fallback": "tdesign:data-search",
	});
}

export default Component;
