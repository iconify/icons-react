import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqaz5nr0q.css';
import '../../css/a/a_v6yccqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vqaz5nr0q"/><path class="a_v6yccqz"/></g>`,
		"fallback": "healthicons:infusion-pump-outline-24px",
	});
}

export default Component;
