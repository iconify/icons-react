import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jctfyftys.css';
import '../../css/m/mdaqa8bsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jctfyftys"/><path class="mdaqa8bsw"/></g>`,
		"fallback": "streamline-plump-color:door-flat",
	});
}

export default Component;
