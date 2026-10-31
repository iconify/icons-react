import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpe7lzmwk.css';
import '../../css/b/b2o18jb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jpe7lzmwk"/><path class="b2o18jb4y"/></g>`,
		"fallback": "coolicons:cctv-duocolor-round",
	});
}

export default Component;
