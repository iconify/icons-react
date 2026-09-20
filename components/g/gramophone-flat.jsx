import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifl1_psnc.css';
import '../../css/f/flc3zygrb.css';
import '../../css/d/dzc85-47c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ifl1_psnc"/><path class="flc3zygrb"/><path class="dzc85-47c"/></g>`,
		"fallback": "streamline-color:gramophone-flat",
	});
}

export default Component;
