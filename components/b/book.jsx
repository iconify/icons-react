import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ufa9-ywnt.css';
import '../../css/e/enjehbvml.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ufa9-ywnt"/><path class="enjehbvml"/></g>`,
		"fallback": "glyphs-poly:book",
	});
}

export default Component;
