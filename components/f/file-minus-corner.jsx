import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hf_86nbhf.css';
import '../../css/z/z9x_ff6vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hf_86nbhf"/><path class="z9x_ff6vv"/></g>`,
		"fallback": "lucide:file-minus-corner",
	});
}

export default Component;
