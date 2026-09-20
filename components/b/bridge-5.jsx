import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc_aiobaz.css';
import '../../css/u/umlm7pbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nc_aiobaz"/><path class="umlm7pbuo"/></g>`,
		"fallback": "tdesign:bridge-5",
	});
}

export default Component;
