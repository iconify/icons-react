import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt8p-7asf.css';
import '../../css/r/rqejj92bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pt8p-7asf"/><path class="rqejj92bw"/></g>`,
		"fallback": "keyline-icons:chart-network-fill",
	});
}

export default Component;
