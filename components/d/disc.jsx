import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lghyv1bbe.css';
import '../../css/a/ao7oa23vf.css';
import '../../css/s/srlliip3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lghyv1bbe"/><path class="ao7oa23vf"/><path clip-rule="evenodd" class="srlliip3r"/></g>`,
		"fallback": "gg:disc",
	});
}

export default Component;
