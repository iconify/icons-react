import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w5cun24ul.css';
import '../../css/m/m4buqzjcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w5cun24ul"/><path class="m4buqzjcx"/></g>`,
		"fallback": "vadivam:image-upscale",
	});
}

export default Component;
