import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9yto1rhv.css';
import '../../css/j/jbd_9xb3y.css';
import '../../css/s/sxesq2y8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s9yto1rhv"/><path clip-rule="evenodd" class="jbd_9xb3y"/><path class="sxesq2y8m"/></g>`,
		"fallback": "streamline-color:copy-paste-flat",
	});
}

export default Component;
