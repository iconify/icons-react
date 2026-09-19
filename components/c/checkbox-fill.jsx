import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z76d8-b2e.css';
import '../../css/d/d5m5uubwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z76d8-b2e"/><path class="d5m5uubwz"/></g>`,
		"fallback": "ci:checkbox-fill",
	});
}

export default Component;
