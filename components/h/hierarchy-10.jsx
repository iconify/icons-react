import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpm84vuob.css';
import '../../css/s/skrk68u9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpm84vuob"/><path class="skrk68u9x"/></g>`,
		"fallback": "streamline-color:hierarchy-10",
	});
}

export default Component;
