import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/apnwk70fe.css';
import '../../css/u/ukdu5oalo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="apnwk70fe"/><path class="ukdu5oalo"/></g>`,
		"fallback": "keyline-icons:chevrons-right-sharp-duotone",
	});
}

export default Component;
