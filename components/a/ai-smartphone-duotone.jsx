import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez1w_-48b.css';
import '../../css/n/n2o6cebib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ez1w_-48b"/><path class="n2o6cebib"/></g>`,
		"fallback": "si:ai-smartphone-duotone",
	});
}

export default Component;
