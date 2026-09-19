import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ozdz-ubzd.css';
import '../../css/o/oefbxybbm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ozdz-ubzd"/><path class="oefbxybbm"/></g>`,
		"fallback": "glyphs-poly:cloudy-partly",
	});
}

export default Component;
