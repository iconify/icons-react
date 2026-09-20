import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w1iepxd2f.css';
import '../../css/u/ukr3sfz5i.css';
import '../../css/d/df-lbeb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w1iepxd2f"/><path class="ukr3sfz5i"/><path class="df-lbeb8b"/></g>`,
		"fallback": "streamline-freehand-color:charging-flash-wave",
	});
}

export default Component;
