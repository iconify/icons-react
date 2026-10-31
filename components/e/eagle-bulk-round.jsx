import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cco71-yiw.css';
import '../../css/s/s3189xbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cco71-yiw"/><path class="s3189xbzd"/></g>`,
		"fallback": "coolicons:eagle-bulk-round",
	});
}

export default Component;
