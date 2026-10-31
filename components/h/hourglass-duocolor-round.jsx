import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvebdkb2o.css';
import '../../css/d/dufm80bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yvebdkb2o"/><path class="dufm80bmi"/></g>`,
		"fallback": "coolicons:hourglass-duocolor-round",
	});
}

export default Component;
