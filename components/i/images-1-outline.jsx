import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/or3aysb-z.css';
import '../../css/r/rdyict78a.css';
import '../../css/u/ua4-rlagr.css';
import '../../css/c/ct-v8-bvm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="or3aysb-z"/><path class="rdyict78a"/><path class="ua4-rlagr"/><path class="ct-v8-bvm"/></g>`,
		"fallback": "glyphs:images-1-outline",
	});
}

export default Component;
