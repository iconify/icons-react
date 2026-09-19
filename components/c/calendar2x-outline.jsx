import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pag7ixb7t.css';
import '../../css/n/n012lha3v.css';
import '../../css/m/m6xg-0gwd.css';
import '../../css/a/alwdmn3ok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pag7ixb7t"/><path clip-rule="evenodd" class="n012lha3v"/><path clip-rule="evenodd" class="m6xg-0gwd"/><path class="alwdmn3ok"/></g>`,
		"fallback": "healthicons:calendar2x-outline",
	});
}

export default Component;
