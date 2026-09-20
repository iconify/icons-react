import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5ps5fbpe.css';
import '../../css/v/vo2em-b5e.css';
import '../../css/v/vo4tnbc2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a5ps5fbpe"/><rect class="vo2em-b5e"/><path class="vo4tnbc2j"/></g>`,
		"fallback": "lucide:car-front",
	});
}

export default Component;
