import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxonao8es.css';
import '../../css/g/gozlzkbdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxonao8es"/><path class="gozlzkbdk"/></g>`,
		"fallback": "streamline-color:button-pause-2",
	});
}

export default Component;
