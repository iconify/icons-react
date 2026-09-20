import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlxex4bvv.css';
import '../../css/j/jwbs-piju.css';
import '../../css/v/vdv47vfaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlxex4bvv"/><path class="jwbs-piju"/><path class="vdv47vfaw"/></g>`,
		"fallback": "keyline-icons:flask-round-duotone",
	});
}

export default Component;
