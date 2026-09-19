import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qizq01b0i.css';
import '../../css/c/ctkbtbb6r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qizq01b0i"/><path class="ctkbtbb6r"/></g>`,
		"fallback": "glyphs:grid-outline",
	});
}

export default Component;
