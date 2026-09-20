import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9gycnbjq.css';
import '../../css/i/iqhj61bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9gycnbjq"/><path class="iqhj61bhk"/></g>`,
		"fallback": "si:building-duotone",
	});
}

export default Component;
