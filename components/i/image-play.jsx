import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9gt4zbtb.css';
import '../../css/l/lohg7zkdn.css';
import '../../css/n/nol19vq4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9gt4zbtb"/><path class="lohg7zkdn"/><circle class="nol19vq4t"/></g>`,
		"fallback": "lucide:image-play",
	});
}

export default Component;
