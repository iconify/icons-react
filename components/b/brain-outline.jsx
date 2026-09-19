import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/afytf29lm.css';
import '../../css/b/bkir4lbwp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="afytf29lm"/><path class="bkir4lbwp"/></g>`,
		"fallback": "glyphs:brain-outline",
	});
}

export default Component;
