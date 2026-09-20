import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/puw9pfmix.css';
import '../../css/r/rxtl2ibrn.css';
import '../../css/a/ao_0jqt1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="puw9pfmix"/><path class="rxtl2ibrn"/><path class="ao_0jqt1e"/></g>`,
		"fallback": "streamline-freehand-color:equalizer-phone-application-2",
	});
}

export default Component;
