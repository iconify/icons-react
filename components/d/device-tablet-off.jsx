import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a9p2nobjl.css';
import '../../css/y/yt99cwcyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a9p2nobjl"/><path class="yt99cwcyl"/></g>`,
		"fallback": "tabler:device-tablet-off",
	});
}

export default Component;
