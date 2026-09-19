import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/u/uma7tcq_e.css';
import '../../css/z/zov3yvb0e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="uma7tcq_e"/><path class="zov3yvb0e"/></g>`,
		"fallback": "glyphs:globe-duo",
	});
}

export default Component;
