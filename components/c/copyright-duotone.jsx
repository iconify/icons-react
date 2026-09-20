import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4e6-gb8i.css';
import '../../css/l/lyl7jrago.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4e6-gb8i"/><path class="lyl7jrago"/></g>`,
		"fallback": "si:copyright-duotone",
	});
}

export default Component;
