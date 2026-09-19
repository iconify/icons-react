import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x38mjom2y.css';
import '../../css/t/t_kavccpz.css';
import '../../css/m/ma-vyac-f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x38mjom2y"/><path class="t_kavccpz"/><path class="ma-vyac-f"/></g>`,
		"fallback": "glyphs-poly:cloudy-mostly",
	});
}

export default Component;
