import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkzw9u2tc.css';
import '../../css/b/bg5s2xb2o.css';
import '../../css/u/ui7z5xbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lkzw9u2tc"/><path clip-rule="evenodd" class="bg5s2xb2o"/><path class="ui7z5xbyc"/></g>`,
		"fallback": "heroicons:document-magnifying-glass-solid",
	});
}

export default Component;
