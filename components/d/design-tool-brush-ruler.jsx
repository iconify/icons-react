import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hb45v6zwd.css';
import '../../css/v/vpja2y7bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hb45v6zwd"/><path class="vpja2y7bc"/></g>`,
		"fallback": "streamline-freehand:design-tool-brush-ruler",
	});
}

export default Component;
