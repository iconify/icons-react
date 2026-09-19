import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-nvvtu9k.css';
import '../../css/c/cj9i99glq.css';
import '../../css/z/z1k0_nbcc.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l-nvvtu9k"/><path class="cj9i99glq"/><path class="z1k0_nbcc"/></g>`,
		"fallback": "flagpack:ba",
	});
}

export default Component;
