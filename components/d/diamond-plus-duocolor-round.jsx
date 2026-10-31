import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e54x5p4fq.css';
import '../../css/g/g63hpbb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e54x5p4fq"/><path class="g63hpbb4p"/></g>`,
		"fallback": "coolicons:diamond-plus-duocolor-round",
	});
}

export default Component;
