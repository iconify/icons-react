import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igeypfjlv.css';
import '../../css/c/cwutt3zuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="igeypfjlv"/><path class="cwutt3zuv"/></g>`,
		"fallback": "vadivam:card-sim",
	});
}

export default Component;
