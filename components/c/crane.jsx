import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hmt9nhp2g.css';
import '../../css/u/u3y_gub6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hmt9nhp2g"/><path class="u3y_gub6a"/></g>`,
		"fallback": "tabler:crane",
	});
}

export default Component;
