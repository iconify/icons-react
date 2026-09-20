import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/damgo-bgt.css';
import '../../css/d/d52rbb3lm.css';
import '../../css/w/wk121w0kk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="damgo-bgt"/><path class="d52rbb3lm"/><path class="wk121w0kk"/></g>`,
		"fallback": "streamline-freehand-color:color-gradient",
	});
}

export default Component;
