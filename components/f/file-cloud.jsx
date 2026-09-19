import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-j38rvvv.css';
import '../../css/m/m2_nxukxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-j38rvvv"/><path class="m2_nxukxf"/></g>`,
		"fallback": "hugeicons:file-cloud",
	});
}

export default Component;
