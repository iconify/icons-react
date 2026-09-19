import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nedktqbjv.css';
import '../../css/r/rayd42qzh.css';
import '../../css/h/h88-h-uwe.css';
import '../../css/j/j8diwbuaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nedktqbjv"/><path clip-rule="evenodd" class="rayd42qzh"/><path class="h88-h-uwe"/><path class="j8diwbuaf"/></g>`,
		"fallback": "icon-park:info",
	});
}

export default Component;
