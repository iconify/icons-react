import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p0pzpubqn.css';
import '../../css/b/b4ovs1b9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p0pzpubqn"/><path class="b4ovs1b9t"/></g>`,
		"fallback": "streamline-flex-color:flip-horizontal-arrow-1-flat",
	});
}

export default Component;
