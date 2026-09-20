import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljz2zm3wc.css';
import '../../css/s/sh71p8ypq.css';
import '../../css/p/pr7acponx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ljz2zm3wc"/><path class="sh71p8ypq"/><path clip-rule="evenodd" class="pr7acponx"/></g>`,
		"fallback": "streamline-sharp-color:database-server-2-flat",
	});
}

export default Component;
