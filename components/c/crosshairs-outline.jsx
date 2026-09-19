import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n574zphyq.css';
import '../../css/j/jx9kr4pbx.css';
import '../../css/t/tvvi5wtmo.css';
import '../../css/n/nzcm26aio.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n574zphyq"/><path class="jx9kr4pbx"/><path class="tvvi5wtmo"/><path class="nzcm26aio"/></g>`,
		"fallback": "glyphs:crosshairs-outline",
	});
}

export default Component;
