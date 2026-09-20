import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvsl91suz.css';
import '../../css/k/kw-nmsblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wvsl91suz"/><path class="kw-nmsblp"/></g>`,
		"fallback": "reicon:benzene-duotone",
	});
}

export default Component;
