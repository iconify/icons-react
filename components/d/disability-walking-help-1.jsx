import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ncmy087qb.css';
import '../../css/h/h8fxcw__y.css';
import '../../css/e/e41xnvung.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ncmy087qb"/><path class="h8fxcw__y"/><path class="e41xnvung"/></g>`,
		"fallback": "streamline-freehand-color:disability-walking-help-1",
	});
}

export default Component;
