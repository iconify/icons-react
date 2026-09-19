import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eg6ampbwl.css';
import '../../css/f/fx9knvb4h.css';
import '../../css/c/cmpm5kb0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eg6ampbwl"/><path class="fx9knvb4h"/><path clip-rule="evenodd" class="cmpm5kb0f"/></g>`,
		"fallback": "healthicons:blood-o-p",
	});
}

export default Component;
