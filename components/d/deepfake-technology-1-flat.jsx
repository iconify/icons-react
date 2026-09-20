import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvtww8b6g.css';
import '../../css/w/w_1xpt7kc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wvtww8b6g"/><path class="w_1xpt7kc"/></g>`,
		"fallback": "streamline-plump-color:deepfake-technology-1-flat",
	});
}

export default Component;
