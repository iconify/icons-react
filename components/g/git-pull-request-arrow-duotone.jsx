import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1dxf3bik.css';
import '../../css/z/zru-yu2af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e1dxf3bik"/><path class="zru-yu2af"/></g>`,
		"fallback": "keyline-icons:git-pull-request-arrow-duotone",
	});
}

export default Component;
