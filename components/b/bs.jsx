import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9ae8841e.css';
import '../../css/t/t_lyayb9w.css';
import '../../css/m/mqzz-ccdn.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9ae8841e"/><path class="t_lyayb9w"/><path class="mqzz-ccdn"/></g>`,
		"fallback": "cif:bs",
	});
}

export default Component;
