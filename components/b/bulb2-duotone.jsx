import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vt_mn6b8c.css';
import '../../css/v/v3u2v4bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vt_mn6b8c"/><path clip-rule="evenodd" class="v3u2v4bef"/></g>`,
		"fallback": "reicon:bulb2-duotone",
	});
}

export default Component;
