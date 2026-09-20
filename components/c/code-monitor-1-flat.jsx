import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoitckm8z.css';
import '../../css/f/f88pp0k3b.css';
import '../../css/g/gnzhvkwao.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoitckm8z"/><path class="f88pp0k3b"/><path class="gnzhvkwao"/></g>`,
		"fallback": "streamline-flex-color:code-monitor-1-flat",
	});
}

export default Component;
