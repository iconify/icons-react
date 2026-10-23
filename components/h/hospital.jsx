import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cau7hu9kn.css';
import '../../css/h/h4f60qjlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cau7hu9kn"/><path class="h4f60qjlt"/></g>`,
		"fallback": "vadivam:hospital",
	});
}

export default Component;
