import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bv4j_vbwv.css';
import '../../css/w/wltzwqb8g.css';
import '../../css/t/td6-0hbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bv4j_vbwv"/><path class="wltzwqb8g"/><path class="td6-0hbao"/></g>`,
		"fallback": "streamline-freehand-color:database-share",
	});
}

export default Component;
