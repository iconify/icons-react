import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hy4dwi-ki.css';
import '../../css/j/j2-htobza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hy4dwi-ki"/><path class="j2-htobza"/></g>`,
		"fallback": "tabler:device-gamepad-2",
	});
}

export default Component;
