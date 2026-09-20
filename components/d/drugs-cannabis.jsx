import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt5fh8bhm.css';
import '../../css/f/f08qtyb_s.css';
import '../../css/i/idumgubey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gt5fh8bhm"/><path class="f08qtyb_s"/><path class="idumgubey"/></g>`,
		"fallback": "streamline-ultimate-color:drugs-cannabis",
	});
}

export default Component;
