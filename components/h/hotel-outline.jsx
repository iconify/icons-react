import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wqg-c_bya.css';
import '../../css/p/p-kz4hzkb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wqg-c_bya"/><path class="p-kz4hzkb"/></g>`,
		"fallback": "glyphs:hotel-outline",
	});
}

export default Component;
