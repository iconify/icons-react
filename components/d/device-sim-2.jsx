import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igxfmq7zv.css';
import '../../css/c/cfsaun62d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="igxfmq7zv"/><path class="cfsaun62d"/></g>`,
		"fallback": "tabler:device-sim-2",
	});
}

export default Component;
