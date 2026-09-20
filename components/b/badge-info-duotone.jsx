import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/f/ff45hndep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="ianaz7b0e"/><path class="ff45hndep"/></g>`,
		"fallback": "keyline-icons:badge-info-duotone",
	});
}

export default Component;
