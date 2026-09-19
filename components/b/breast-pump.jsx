import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g73551bxw.css';
import '../../css/x/xaoiumbpv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g73551bxw"/><path clip-rule="evenodd" class="xaoiumbpv"/></g>`,
		"fallback": "healthicons:breast-pump",
	});
}

export default Component;
