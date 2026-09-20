import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/u/ugcs83bop.css';
import '../../css/m/m7ah4bbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="ugcs83bop"/><path class="m7ah4bbgp"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-curve-up",
	});
}

export default Component;
