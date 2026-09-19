import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvmkqsbso.css';
import '../../css/j/jzmvxfbwd.css';
import '../../css/k/kcitn8s2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cvmkqsbso"/><path clip-rule="evenodd" class="jzmvxfbwd"/><path clip-rule="evenodd" class="kcitn8s2t"/></g>`,
		"fallback": "healthicons:hpv-outline",
	});
}

export default Component;
