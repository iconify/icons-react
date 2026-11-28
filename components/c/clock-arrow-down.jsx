import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d50lcuh7w.css';
import '../../css/u/uosdk-aax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d50lcuh7w"/><path class="uosdk-aax"/></g>`,
		"fallback": "lucide:clock-arrow-down",
	});
}

export default Component;
