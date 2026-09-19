import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/ma3zm5bml.css';
import '../../css/s/s3-97wbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ma3zm5bml"/><path class="s3-97wbsp"/></g>`,
		"fallback": "hugeicons:fence",
	});
}

export default Component;
