import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9en77b0p.css';
import '../../css/v/vwdfj7brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9en77b0p"/><path class="vwdfj7brr"/></g>`,
		"fallback": "tabler:arrows-join",
	});
}

export default Component;
