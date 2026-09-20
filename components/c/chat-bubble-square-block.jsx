import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tokx6qbwt.css';
import '../../css/t/tkrdvij0b.css';
import '../../css/z/znvvnxbpy.css';
import '../../css/n/npbwedb1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tokx6qbwt"/><path class="tkrdvij0b"/><path class="znvvnxbpy"/><path class="npbwedb1v"/></g>`,
		"fallback": "streamline-color:chat-bubble-square-block",
	});
}

export default Component;
