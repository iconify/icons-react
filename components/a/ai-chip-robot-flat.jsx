import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/trbccptdc.css';
import '../../css/y/ym_lztb4y.css';
import '../../css/e/ee10sccwz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="trbccptdc"/><path class="ym_lztb4y"/><path class="ee10sccwz"/></g>`,
		"fallback": "streamline-flex-color:ai-chip-robot-flat",
	});
}

export default Component;
