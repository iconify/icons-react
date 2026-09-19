import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkj7k3b9y.css';
import '../../css/e/ebwoi37kk.css';
import '../../css/t/tenprb2cu.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vkj7k3b9y"/><path class="ebwoi37kk"/><path class="tenprb2cu"/></g>`,
		"fallback": "cif:bg",
	});
}

export default Component;
