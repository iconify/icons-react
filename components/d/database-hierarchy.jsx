import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hyugtca5p.css';
import '../../css/a/a3mw95bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hyugtca5p"/><path class="a3mw95bjb"/></g>`,
		"fallback": "streamline-freehand-color:database-hierarchy",
	});
}

export default Component;
