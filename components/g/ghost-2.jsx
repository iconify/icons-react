import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fld7_tbeg.css';
import '../../css/s/sk8y3_b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fld7_tbeg"/><path class="sk8y3_b-c"/></g>`,
		"fallback": "tabler:ghost-2",
	});
}

export default Component;
