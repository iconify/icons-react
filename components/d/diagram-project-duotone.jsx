import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq3id0t8d.css';
import '../../css/v/vo_5k3bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tq3id0t8d"/><path class="vo_5k3bvu"/></g>`,
		"fallback": "keyline-icons:diagram-project-duotone",
	});
}

export default Component;
