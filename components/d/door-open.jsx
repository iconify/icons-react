import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/an6cwhv_g.css';
import '../../css/q/qczb-hlmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="an6cwhv_g"/><path class="qczb-hlmy"/></g>`,
		"fallback": "vadivam:door-open",
	});
}

export default Component;
