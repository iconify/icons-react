import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/czes8vbll.css';
import '../../css/q/qs2ds3bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="czes8vbll"/><path class="qs2ds3bnj"/></g>`,
		"fallback": "lucide:circle-fading-check",
	});
}

export default Component;
