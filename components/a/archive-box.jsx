import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyg7jiy9l.css';
import '../../css/p/pi4sylbxa.css';
import '../../css/y/ye-fe69zy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyg7jiy9l"/><path clip-rule="evenodd" class="pi4sylbxa"/><path class="ye-fe69zy"/></g>`,
		"fallback": "streamline-flex-color:archive-box",
	});
}

export default Component;
