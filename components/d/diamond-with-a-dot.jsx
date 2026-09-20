import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntd0jsay.css';
import '../../css/l/l7rj5bayp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s5v8bubiv.css';
import '../../css/h/hsr133bia.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hntd0jsay"/><path class="l7rj5bayp"/><g class="jn8qy4bru"><path class="s5v8bubiv"/><path class="hsr133bia"/></g>`,
		"fallback": "openmoji:diamond-with-a-dot",
	});
}

export default Component;
