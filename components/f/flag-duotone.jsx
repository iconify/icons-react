import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o03klob7l.css';
import '../../css/b/b7kbp1b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o03klob7l"/><path class="b7kbp1b5x"/></g>`,
		"fallback": "si:flag-duotone",
	});
}

export default Component;
