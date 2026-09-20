import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c0f8r7r7i.css';
import '../../css/g/g3likac1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c0f8r7r7i"/><path class="g3likac1n"/></g>`,
		"fallback": "keyline-icons:arrow-up-narrow-wide-sharp-two-tone",
	});
}

export default Component;
