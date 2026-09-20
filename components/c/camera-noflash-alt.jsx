import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/m52ujhbov.css';
import '../../css/w/wdqcl6bim.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="m52ujhbov"/><path class="wdqcl6bim"/></g>`,
		"fallback": "system-uicons:camera-noflash-alt",
	});
}

export default Component;
