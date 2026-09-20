import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-8ankb1q.css';
import '../../css/v/v_juk5ico.css';
import '../../css/z/zx3h_acia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-8ankb1q"/><path class="v_juk5ico"/><path class="zx3h_acia"/></g>`,
		"fallback": "streamline-freehand-color:color-brush-1",
	});
}

export default Component;
