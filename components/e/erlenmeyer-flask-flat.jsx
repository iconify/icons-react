import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n4d0a1b7q.css';
import '../../css/b/bdpr6kahb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n4d0a1b7q"/><path class="bdpr6kahb"/></g>`,
		"fallback": "streamline-plump-color:erlenmeyer-flask-flat",
	});
}

export default Component;
