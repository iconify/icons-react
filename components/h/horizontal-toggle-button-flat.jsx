import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sp2fbb8bo.css';
import '../../css/c/cpy0n4a_h.css';
import '../../css/i/isx5y3bfo.css';
import '../../css/f/fa1iec66m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sp2fbb8bo"/><path class="cpy0n4a_h"/><path class="isx5y3bfo"/><path class="fa1iec66m"/></g>`,
		"fallback": "streamline-flex-color:horizontal-toggle-button-flat",
	});
}

export default Component;
