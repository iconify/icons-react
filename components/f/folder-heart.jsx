import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qj-ogsbla.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qj-ogsbla"/><path class="imo26mlcc"/></g>`,
		"fallback": "tabler:folder-heart",
	});
}

export default Component;
