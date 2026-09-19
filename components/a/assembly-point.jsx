import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqr4j-mcw.css';
import '../../css/x/xfp6bfr_k.css';
import '../../css/b/b70npha0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mqr4j-mcw"/><path class="xfp6bfr_k"/><path clip-rule="evenodd" class="b70npha0t"/></g>`,
		"fallback": "healthicons:assembly-point",
	});
}

export default Component;
