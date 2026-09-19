import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tim7-__5v.css';
import '../../css/h/hvywrpbbv.css';
import '../../css/d/dmo352x4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tim7-__5v"/><path class="hvywrpbbv"/><path clip-rule="evenodd" class="dmo352x4a"/></g>`,
		"fallback": "healthicons:geriatrics-outline",
	});
}

export default Component;
