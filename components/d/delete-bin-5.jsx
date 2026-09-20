import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m5wjtjb6x.css';
import '../../css/m/mh3-gnbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m5wjtjb6x"/><path class="mh3-gnbck"/></g>`,
		"fallback": "streamline-freehand-color:delete-bin-5",
	});
}

export default Component;
