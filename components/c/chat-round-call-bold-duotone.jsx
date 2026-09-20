import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2fm9-b4c.css';
import '../../css/r/rnav8kb8d.css';
import '../../css/h/h8fjzdb4w.css';
import '../../css/p/pwxlsdbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2fm9-b4c"/><path clip-rule="evenodd" class="rnav8kb8d"/><path clip-rule="evenodd" class="h8fjzdb4w"/><path class="pwxlsdbcv"/></g>`,
		"fallback": "solar:chat-round-call-bold-duotone",
	});
}

export default Component;
