import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fi4vrhbhi.css';
import '../../css/e/eekqg7krm.css';
import '../../css/q/q1w16kuvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fi4vrhbhi"/><path class="eekqg7krm"/><path class="q1w16kuvv"/></g>`,
		"fallback": "hugeicons:file-yen",
	});
}

export default Component;
