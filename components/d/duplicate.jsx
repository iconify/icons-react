import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vs824-ymu.css';
import '../../css/l/lovkcu-ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vs824-ymu"/><path class="lovkcu-ei"/></g>`,
		"fallback": "streamline-ultimate:duplicate",
	});
}

export default Component;
