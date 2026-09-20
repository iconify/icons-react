import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/av65x9l3d.css';
import '../../css/b/b8b6f18qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="av65x9l3d"/><path class="b8b6f18qh"/></g>`,
		"fallback": "streamline-freehand-color:allowances-smoking",
	});
}

export default Component;
