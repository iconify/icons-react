import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qd0vfcfaj.css';
import '../../css/e/ecr7w4b6e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qd0vfcfaj"/><path class="ecr7w4b6e"/></g>`,
		"fallback": "streamline-color:database-server-1-flat",
	});
}

export default Component;
