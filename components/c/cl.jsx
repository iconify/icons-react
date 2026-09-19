import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/clv_0rxpg.css';
import '../../css/a/ahb3szrou.css';
import '../../css/y/yg27cxuxs.css';
import '../../css/r/rxtygbq0g.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="clv_0rxpg"/><path class="ahb3szrou"/><path class="yg27cxuxs"/><path class="rxtygbq0g"/></g>`,
		"fallback": "flagpack:cl",
	});
}

export default Component;
