import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fxfr12bzu.css';
import '../../css/j/jornx4v1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fxfr12bzu"/><path class="jornx4v1h"/></g>`,
		"fallback": "coolicons:egg-duocolor-round",
	});
}

export default Component;
