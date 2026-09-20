import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oy20phdjh.css';
import '../../css/l/lf6i0ybxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oy20phdjh"/><path class="lf6i0ybxu"/></g>`,
		"fallback": "streamline-flex-color:desktop-screensaver-sleep-flat",
	});
}

export default Component;
