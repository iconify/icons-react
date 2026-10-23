import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kmr_5gbeb.css';
import '../../css/b/b_n8y9--j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kmr_5gbeb"/><path class="b_n8y9--j"/></g>`,
		"fallback": "vadivam:carrot",
	});
}

export default Component;
