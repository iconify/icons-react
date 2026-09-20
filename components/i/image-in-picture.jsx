import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpkdxybdx.css';
import '../../css/z/zydqu-6hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpkdxybdx"/><path clip-rule="evenodd" class="zydqu-6hd"/></g>`,
		"fallback": "majesticons:image-in-picture",
	});
}

export default Component;
