import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ifskleq-t.css';
import '../../css/q/qlwj2db6r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ifskleq-t"/><path class="qlwj2db6r"/></g>`,
		"fallback": "streamline-color:cane-flat",
	});
}

export default Component;
