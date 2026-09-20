import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ylicl4bsh.css';
import '../../css/p/p43_x888h.css';
import '../../css/j/j-2e7xbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ylicl4bsh"/><path class="p43_x888h"/><path class="j-2e7xbeo"/></g>`,
		"fallback": "streamline-freehand-color:human-resources-businessman",
	});
}

export default Component;
