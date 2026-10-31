import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5vfg-38a.css';
import '../../css/d/dcivgm2wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m5vfg-38a"/><path class="dcivgm2wg"/></g>`,
		"fallback": "coolicons:bulb-sparkle-duocolor-round",
	});
}

export default Component;
