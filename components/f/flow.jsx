import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kae0pfb-s.css';
import '../../css/l/luw-cyu8c.css';
import '../../css/g/gtrbizr6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kae0pfb-s"/><path class="luw-cyu8c"/><circle class="gtrbizr6q"/></g>`,
		"fallback": "andrsrxn:flow",
	});
}

export default Component;
