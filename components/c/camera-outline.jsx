import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_90zg5-g.css';
import '../../css/r/rnlzwqbim.css';
import '../../css/k/khjwtz1gt.css';
import '../../css/j/jq0l92hsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_90zg5-g"/><path clip-rule="evenodd" class="rnlzwqbim"/><path clip-rule="evenodd" class="khjwtz1gt"/><path clip-rule="evenodd" class="jq0l92hsf"/></g>`,
		"fallback": "healthicons:camera-outline",
	});
}

export default Component;
