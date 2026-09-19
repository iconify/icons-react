import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyuh6wb8z.css';
import '../../css/s/s9w9-4b0f.css';
import '../../css/z/zn0vk4bkg.css';
import '../../css/z/zepf_92zz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fyuh6wb8z"/><path class="s9w9-4b0f"/><path clip-rule="evenodd" class="zn0vk4bkg"/><path class="zepf_92zz"/></g>`,
		"fallback": "glyphs:analytics-bold",
	});
}

export default Component;
