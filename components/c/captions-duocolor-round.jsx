import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xcdeapb2u.css';
import '../../css/y/yd5yxj9_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xcdeapb2u"/><path class="yd5yxj9_b"/></g>`,
		"fallback": "coolicons:captions-duocolor-round",
	});
}

export default Component;
