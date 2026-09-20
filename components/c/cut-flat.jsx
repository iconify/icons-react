import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b45ssepsh.css';
import '../../css/r/rqgbc7bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b45ssepsh"/><path class="rqgbc7bdv"/></g>`,
		"fallback": "streamline-sharp-color:cut-flat",
	});
}

export default Component;
