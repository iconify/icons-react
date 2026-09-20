import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fhpl0-3an.css';
import '../../css/l/lz4m_yb4l.css';
import '../../css/i/ivzdjnbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fhpl0-3an"/><path clip-rule="evenodd" class="lz4m_yb4l"/><path clip-rule="evenodd" class="ivzdjnbcl"/></g>`,
		"fallback": "reicon:forward-10s-duotone",
	});
}

export default Component;
