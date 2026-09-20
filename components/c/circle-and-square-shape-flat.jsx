import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvsfyabzn.css';
import '../../css/g/gthpj46-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvsfyabzn"/><path class="gthpj46-u"/></g>`,
		"fallback": "streamline-plump-color:circle-and-square-shape-flat",
	});
}

export default Component;
