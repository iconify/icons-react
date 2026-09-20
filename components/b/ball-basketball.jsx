import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mftj2rb4h.css';
import '../../css/h/hv4kfqbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mftj2rb4h"/><path class="hv4kfqbrr"/></g>`,
		"fallback": "tabler:ball-basketball",
	});
}

export default Component;
