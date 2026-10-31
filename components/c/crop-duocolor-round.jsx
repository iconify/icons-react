import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy4u890oc.css';
import '../../css/l/lcbvy6bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yy4u890oc"/><path class="lcbvy6bhk"/></g>`,
		"fallback": "coolicons:crop-duocolor-round",
	});
}

export default Component;
