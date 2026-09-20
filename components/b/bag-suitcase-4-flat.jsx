import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p71m-ys5l.css';
import '../../css/z/zjq1ew06h.css';
import '../../css/o/of-4y9qcp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p71m-ys5l"/><path class="zjq1ew06h"/><path class="of-4y9qcp"/></g>`,
		"fallback": "streamline-flex-color:bag-suitcase-4-flat",
	});
}

export default Component;
