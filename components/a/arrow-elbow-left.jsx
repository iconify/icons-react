import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pq-eznohw.css';
import '../../css/p/plqkxebjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pq-eznohw"/><path class="plqkxebjt"/></g>`,
		"fallback": "tabler:arrow-elbow-left",
	});
}

export default Component;
