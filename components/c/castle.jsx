import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/urt9of-lw.css';
import '../../css/o/opit9fb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="urt9of-lw"/><path class="opit9fb5l"/></g>`,
		"fallback": "vadivam:castle",
	});
}

export default Component;
