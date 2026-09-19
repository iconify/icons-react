import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zk0wjn-dd.css';
import '../../css/y/yn8mhpbye.css';
import '../../css/p/p0qy-sbma.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zk0wjn-dd"/><path class="yn8mhpbye"/><path class="p0qy-sbma"/></g>`,
		"fallback": "glyphs:dollar-bill-duo",
	});
}

export default Component;
