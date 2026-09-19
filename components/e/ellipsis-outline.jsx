import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnhftl6dc.css';
import '../../css/s/s05cnm7_j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnhftl6dc"/><path class="s05cnm7_j"/></g>`,
		"fallback": "glyphs:ellipsis-outline",
	});
}

export default Component;
