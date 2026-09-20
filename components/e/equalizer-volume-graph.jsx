import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ifk1uu2oa.css';
import '../../css/r/r7761-buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ifk1uu2oa"/><path class="r7761-buu"/></g>`,
		"fallback": "streamline-freehand-color:equalizer-volume-graph",
	});
}

export default Component;
