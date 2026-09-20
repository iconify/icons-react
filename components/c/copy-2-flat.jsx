import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j0a576glu.css';
import '../../css/d/dnug5tb-m.css';
import '../../css/p/pm7abs72w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j0a576glu"/><path class="dnug5tb-m"/><path class="pm7abs72w"/></g>`,
		"fallback": "streamline-flex-color:copy-2-flat",
	});
}

export default Component;
