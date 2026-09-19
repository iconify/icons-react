import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/otvehur3a.css';
import '../../css/t/t2ug23bus.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="otvehur3a"/><path class="t2ug23bus"/></g>`,
		"fallback": "glyphs:arrows-exchange-outline",
	});
}

export default Component;
