import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wtlwucb4x.css';
import '../../css/q/q5at-vddn.css';
import '../../css/x/x1c395rcg.css';
import '../../css/g/g1j7d-50j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wtlwucb4x"/><path class="q5at-vddn"/><path class="x1c395rcg"/><path class="g1j7d-50j"/></g>`,
		"fallback": "streamline-color:hard-disk",
	});
}

export default Component;
