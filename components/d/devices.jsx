import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmxaaof0h.css';
import '../../css/m/mjq82emtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmxaaof0h"/><path class="mjq82emtq"/></g>`,
		"fallback": "akar-icons:devices",
	});
}

export default Component;
