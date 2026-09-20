import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ouh-gobdj.css';
import '../../css/l/l219k3blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ouh-gobdj"/><path class="l219k3blr"/></g>`,
		"fallback": "keyline-icons:heading-2-sharp-duotone",
	});
}

export default Component;
