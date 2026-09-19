import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zsy9hqdwb.css';
import '../../css/r/rgza8wbpy.css';
import '../../css/q/qkhof_b-k.css';
import '../../css/l/luw467qkp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zsy9hqdwb"/><path class="rgza8wbpy"/><path class="qkhof_b-k"/><path class="luw467qkp"/></g>`,
		"fallback": "glyphs:box-layout-4-outline",
	});
}

export default Component;
