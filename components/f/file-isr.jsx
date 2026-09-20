import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ytxabdb.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kvvhfebba.css';
import '../../css/n/n_3oplyam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGrajsLe6H" class="w-ytxabdb"/></defs><g class="nrj6p8qat"><use href="#SVGrajsLe6H"/><use href="#SVGrajsLe6H"/><path class="kvvhfebba"/><path class="n_3oplyam"/></g>`,
		"fallback": "tabler:file-isr",
	});
}

export default Component;
