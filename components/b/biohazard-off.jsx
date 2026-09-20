import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bl3rrbclu.css';
import '../../css/j/joznk2bze.css';
import '../../css/v/vhm0j7bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bl3rrbclu"/><path class="joznk2bze"/><path class="vhm0j7bqv"/></g>`,
		"fallback": "tabler:biohazard-off",
	});
}

export default Component;
