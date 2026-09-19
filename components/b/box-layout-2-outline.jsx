import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yeujkhbau.css';
import '../../css/r/rgza8wbpy.css';
import '../../css/k/krcyms04q.css';
import '../../css/l/luw467qkp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yeujkhbau"/><path class="rgza8wbpy"/><path class="krcyms04q"/><path class="luw467qkp"/></g>`,
		"fallback": "glyphs:box-layout-2-outline",
	});
}

export default Component;
