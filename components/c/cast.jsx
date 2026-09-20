import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uvlcr55vq.css';
import '../../css/a/auhoknbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uvlcr55vq"/><path class="auhoknbvi"/></g>`,
		"fallback": "tabler:cast",
	});
}

export default Component;
