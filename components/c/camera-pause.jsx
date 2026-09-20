import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j10yehetv.css';
import '../../css/i/irzc6xbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j10yehetv"/><path class="irzc6xbfq"/></g>`,
		"fallback": "tabler:camera-pause",
	});
}

export default Component;
