import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f386ljber.css';
import '../../css/x/xlllqtwpy.css';
import '../../css/b/b4wadacto.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><path class="f386ljber"/><circle class="xlllqtwpy"/><path class="b4wadacto"/></g>`,
		"fallback": "system-uicons:gps",
	});
}

export default Component;
