import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wyobwbb5u.css';
import '../../css/x/xskjc9b9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wyobwbb5u"/><path class="xskjc9b9u"/></g>`,
		"fallback": "glyphs-poly:chart-pie-slice",
	});
}

export default Component;
