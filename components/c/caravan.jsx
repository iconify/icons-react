import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdlbw6brp.css';
import '../../css/m/mgd1ybo-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdlbw6brp"/><path class="mgd1ybo-d"/></g>`,
		"fallback": "vadivam:caravan",
	});
}

export default Component;
