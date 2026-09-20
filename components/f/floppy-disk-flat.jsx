import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyk4m17bg.css';
import '../../css/j/j3uweg3gn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yyk4m17bg"/><path class="j3uweg3gn"/></g>`,
		"fallback": "streamline-color:floppy-disk-flat",
	});
}

export default Component;
