import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cyr97l9zo.css';
import '../../css/p/pc-gahypt.css';
import '../../css/r/r9a6-g0kz.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cyr97l9zo"/><path class="pc-gahypt"/><path class="r9a6-g0kz"/></g>`,
		"fallback": "flagpack:gn",
	});
}

export default Component;
