import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjnfksb2c.css';
import '../../css/i/idh70tbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bjnfksb2c"/><path class="idh70tbsk"/></g>`,
		"fallback": "lucide:eye-off",
	});
}

export default Component;
