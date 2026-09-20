import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn26p45iq.css';
import '../../css/c/c5j51tvvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xn26p45iq"/><path class="c5j51tvvl"/></g>`,
		"fallback": "tabler:golf",
	});
}

export default Component;
