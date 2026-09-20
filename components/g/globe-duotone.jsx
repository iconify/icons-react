import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rzy_z4b1c.css';
import '../../css/o/ozl4dybfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rzy_z4b1c"/><path class="ozl4dybfy"/></g>`,
		"fallback": "keyline-icons:globe-duotone",
	});
}

export default Component;
