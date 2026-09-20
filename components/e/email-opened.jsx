import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g2oa2nvff.css';
import '../../css/r/r2x4fvb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g2oa2nvff"/><path class="r2x4fvb2c"/></g>`,
		"fallback": "mage:email-opened",
	});
}

export default Component;
