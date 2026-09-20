import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kzeg54b4h.css';
import '../../css/g/g5bgjtb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kzeg54b4h"/><path class="g5bgjtb_y"/></g>`,
		"fallback": "lucide:bring-to-front",
	});
}

export default Component;
