import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zds7z8bri.css';
import '../../css/i/iujogacxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zds7z8bri"/><path class="iujogacxf"/></g>`,
		"fallback": "coolicons:charging-station-duocolor-round",
	});
}

export default Component;
