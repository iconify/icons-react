import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5_6a43jk.css';
import '../../css/x/x-pobqbjg.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g5_6a43jk"/><path class="x-pobqbjg"/><rect class="u8u9_5smu"/></g>`,
		"fallback": "lucide:clipboard-paste",
	});
}

export default Component;
