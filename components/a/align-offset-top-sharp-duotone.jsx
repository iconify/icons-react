import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eym-d9b2y.css';
import '../../css/n/n7sq4abaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eym-d9b2y"/><path class="n7sq4abaq"/></g>`,
		"fallback": "keyline-icons:align-offset-top-sharp-duotone",
	});
}

export default Component;
