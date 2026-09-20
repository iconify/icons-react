import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/szlje4bjn.css';
import '../../css/y/y266v2bfv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="szlje4bjn"/><path class="y266v2bfv"/></g>`,
		"fallback": "streamline-plump-color:application-add-flat",
	});
}

export default Component;
