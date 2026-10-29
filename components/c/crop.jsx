import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k8e5r6sft.css';
import '../../css/b/b5bfvoblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k8e5r6sft"/><path class="b5bfvoblb"/></g>`,
		"fallback": "withicons:crop",
	});
}

export default Component;
