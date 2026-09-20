import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vuin9ubsk.css';
import '../../css/g/g9pdv-bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vuin9ubsk"/><path class="g9pdv-bwt"/></g>`,
		"fallback": "keyline-icons:bell-ring-two-tone",
	});
}

export default Component;
