import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sl6_gqb3z.css';
import '../../css/g/gp7pkqbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sl6_gqb3z"/><path class="gp7pkqbnv"/></g>`,
		"fallback": "struq:ask",
	});
}

export default Component;
