import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyc28ppqt.css';
import '../../css/k/klmckvt5p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o2pehacao.css';
import '../../css/y/yquj7mbss.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyc28ppqt"/><path class="klmckvt5p"/><g class="jn8qy4bru"><path class="o2pehacao"/><path class="yquj7mbss"/></g>`,
		"fallback": "openmoji:closed-umbrella",
	});
}

export default Component;
