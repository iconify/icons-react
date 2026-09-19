import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qa8vxzbsv.css';
import '../../css/s/sewevacut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qa8vxzbsv"/><path class="sewevacut"/></g>`,
		"fallback": "hugeicons:cursor-rectangle-selection-01",
	});
}

export default Component;
