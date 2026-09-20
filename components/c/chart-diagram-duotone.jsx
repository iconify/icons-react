import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfyusmblb.css';
import '../../css/g/gu4-r2bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfyusmblb"/><path class="gu4-r2bzk"/></g>`,
		"fallback": "keyline-icons:chart-diagram-duotone",
	});
}

export default Component;
