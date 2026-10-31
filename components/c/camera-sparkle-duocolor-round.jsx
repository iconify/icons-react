import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pie5oxg6b.css';
import '../../css/q/qf0cwgb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pie5oxg6b"/><path class="qf0cwgb3d"/></g>`,
		"fallback": "coolicons:camera-sparkle-duocolor-round",
	});
}

export default Component;
