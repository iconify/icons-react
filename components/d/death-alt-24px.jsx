import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kppv825yt.css';
import '../../css/d/drj4s7sil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kppv825yt"/><path class="drj4s7sil"/></g>`,
		"fallback": "healthicons:death-alt-24px",
	});
}

export default Component;
