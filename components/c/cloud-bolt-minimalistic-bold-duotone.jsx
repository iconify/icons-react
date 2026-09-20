import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbhnlnbyv.css';
import '../../css/e/eztzqucpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vbhnlnbyv"/><path clip-rule="evenodd" class="eztzqucpf"/></g>`,
		"fallback": "solar:cloud-bolt-minimalistic-bold-duotone",
	});
}

export default Component;
