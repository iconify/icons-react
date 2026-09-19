import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c-wokwols.css';
import '../../css/d/dtid9hb3k.css';
import '../../css/z/zd5iasbeb.css';
import '../../css/y/yz1mcrb9n.css';
import '../../css/t/t9tj1bctq.css';
import '../../css/q/qv7vcda1w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c-wokwols"/><path class="dtid9hb3k"/><path class="zd5iasbeb"/><path class="yz1mcrb9n"/><path class="t9tj1bctq"/><path class="qv7vcda1w"/></g>`,
		"fallback": "glyphs:compass-1-outline",
	});
}

export default Component;
