import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9007y6zb.css';
import '../../css/f/f-t8t2isn.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/x/xlyu1ccaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9007y6zb"/><path class="f-t8t2isn"/><path class="x19qmcbwy"/><path class="xlyu1ccaa"/></g>`,
		"fallback": "streamline-ultimate-color:add-circle-bold",
	});
}

export default Component;
