import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pex2gnv1d.css';
import '../../css/o/orey5jilx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pex2gnv1d"/><path class="orey5jilx"/></g>`,
		"fallback": "si:align-horiz-center-detailed-duotone",
	});
}

export default Component;
