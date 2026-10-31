import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dkswcojrx.css';
import '../../css/g/gd6wjjbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dkswcojrx"/><path class="gd6wjjbrj"/></g>`,
		"fallback": "coolicons:battery-charging-duocolor-round",
	});
}

export default Component;
