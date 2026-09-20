import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt0mjubxl.css';
import '../../css/f/fjxpgabuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pt0mjubxl"/><path class="fjxpgabuh"/></g>`,
		"fallback": "tabler:device-computer-camera-off",
	});
}

export default Component;
