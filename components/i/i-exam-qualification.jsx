import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahro8jb1p.css';
import '../../css/d/d51ngz3_m.css';
import '../../css/k/kfmctjs9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahro8jb1p"/><path clip-rule="evenodd" class="d51ngz3_m"/><path clip-rule="evenodd" class="kfmctjs9b"/></g>`,
		"fallback": "healthicons:i-exam-qualification",
	});
}

export default Component;
