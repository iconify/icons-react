import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu6-uy96e.css';
import '../../css/a/af7l3rbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wu6-uy96e"/><path class="af7l3rbrg"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-left-box-duotone",
	});
}

export default Component;
