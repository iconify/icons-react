import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q11bttj1x.css';
import '../../css/z/zycrkcc6i.css';
import '../../css/w/w-36d1b3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q11bttj1x"/><path clip-rule="evenodd" class="zycrkcc6i"/><path class="w-36d1b3x"/></g>`,
		"fallback": "healthicons:blood-ab-p",
	});
}

export default Component;
