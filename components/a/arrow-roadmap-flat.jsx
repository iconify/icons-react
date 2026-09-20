import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y-txpkbhj.css';
import '../../css/p/pgl-h5w7e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y-txpkbhj"/><path class="pgl-h5w7e"/></g>`,
		"fallback": "streamline-flex-color:arrow-roadmap-flat",
	});
}

export default Component;
