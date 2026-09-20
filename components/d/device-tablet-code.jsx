import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz97bzbdz.css';
import '../../css/r/r-ueysuzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oz97bzbdz"/><path class="r-ueysuzy"/></g>`,
		"fallback": "tabler:device-tablet-code",
	});
}

export default Component;
