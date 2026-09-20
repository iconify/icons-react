import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1f8_pvxr.css';
import '../../css/r/r63usobks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x1f8_pvxr"/><path class="r63usobks"/></g>`,
		"fallback": "tabler:device-floppy",
	});
}

export default Component;
