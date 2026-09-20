import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/df66ndyre.css';
import '../../css/d/dln0hm2_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="df66ndyre"/><path class="dln0hm2_w"/></g>`,
		"fallback": "streamline-plump-color:box-waterproof-flat",
	});
}

export default Component;
