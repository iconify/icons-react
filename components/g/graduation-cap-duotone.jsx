import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4bfw0bgo.css';
import '../../css/g/giq90bbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s4bfw0bgo"/><path clip-rule="evenodd" class="giq90bbgn"/></g>`,
		"fallback": "keyline-icons:graduation-cap-duotone",
	});
}

export default Component;
