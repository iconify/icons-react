import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyug6mbqf.css';
import '../../css/x/x0_p2acvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tyug6mbqf"/><path class="x0_p2acvl"/></g>`,
		"fallback": "streamline-plump-color:hotel-bed-5-flat",
	});
}

export default Component;
