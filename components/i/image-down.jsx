import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iwxfkwb0s.css';
import '../../css/n/n3xjuobnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iwxfkwb0s"/><path class="n3xjuobnz"/></g>`,
		"fallback": "vadivam:image-down",
	});
}

export default Component;
