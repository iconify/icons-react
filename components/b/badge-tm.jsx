import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/idt4_tbfk.css';
import '../../css/n/n6_0wrbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="idt4_tbfk"/><path class="n6_0wrbec"/></g>`,
		"fallback": "tabler:badge-tm",
	});
}

export default Component;
