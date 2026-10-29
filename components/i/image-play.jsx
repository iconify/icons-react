import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nc9cnb73g.css';
import '../../css/c/cjiczsbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nc9cnb73g"/><path class="cjiczsbcy"/></g>`,
		"fallback": "vadivam:image-play",
	});
}

export default Component;
