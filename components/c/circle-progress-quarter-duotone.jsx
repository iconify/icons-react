import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-_oj69zk.css';
import '../../css/w/wbm9ombma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-_oj69zk"/><path class="wbm9ombma"/></g>`,
		"fallback": "keyline-icons:circle-progress-quarter-duotone",
	});
}

export default Component;
