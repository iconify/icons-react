import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mez3bnxzu.css';
import '../../css/r/r577nlb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mez3bnxzu"/><path class="r577nlb-a"/></g>`,
		"fallback": "tabler:barrel",
	});
}

export default Component;
