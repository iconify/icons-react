import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lr8euubyt.css';
import '../../css/y/ykg6whbsy.css';
import '../../css/r/retufz7fu.css';

const viewBox = {"width":88,"height":88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lr8euubyt"/><path class="ykg6whbsy"/><path class="retufz7fu"/></g>`,
		"fallback": "glyphs-poly:chart-pie",
	});
}

export default Component;
