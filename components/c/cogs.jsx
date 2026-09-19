import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o-9h659ll.css';
import '../../css/m/mlwa6977n.css';

const viewBox = {"width":84,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o-9h659ll"/><path class="mlwa6977n"/></g>`,
		"fallback": "glyphs-poly:cogs",
	});
}

export default Component;
