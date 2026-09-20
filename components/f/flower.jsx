import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyhj8vbvd.css';
import '../../css/y/yh9b1irac.css';
import '../../css/s/s7rmi0anc.css';
import '../../css/o/ou9-rm22b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eyhj8vbvd"/><path class="yh9b1irac"/><path class="s7rmi0anc"/><path class="ou9-rm22b"/></g>`,
		"fallback": "streamline-color:flower",
	});
}

export default Component;
