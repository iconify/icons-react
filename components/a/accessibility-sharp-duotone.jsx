import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t8drw368i.css';
import '../../css/t/tlma14baz.css';
import '../../css/c/cxhoxcc8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t8drw368i"/><path class="tlma14baz"/><path class="cxhoxcc8c"/></g>`,
		"fallback": "keyline-icons:accessibility-sharp-duotone",
	});
}

export default Component;
