import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ed3kmcc7e.css';
import '../../css/n/nrke1nbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ed3kmcc7e"/><path class="nrke1nbxj"/></g>`,
		"fallback": "keyline-icons:diagram-predecessor-sharp-duotone",
	});
}

export default Component;
