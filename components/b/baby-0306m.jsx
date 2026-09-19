import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z30jtdcxy.css';
import '../../css/p/pb1-vhi0c.css';
import '../../css/a/a1btc6b-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z30jtdcxy"/><path class="pb1-vhi0c"/><path clip-rule="evenodd" class="a1btc6b-m"/></g>`,
		"fallback": "healthicons:baby-0306m",
	});
}

export default Component;
