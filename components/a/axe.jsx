import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zca_czboy.css';
import '../../css/z/zekxdpomm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zca_czboy"/><path class="zekxdpomm"/></g>`,
		"fallback": "glyphs-poly:axe",
	});
}

export default Component;
