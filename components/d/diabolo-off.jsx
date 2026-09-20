import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/netsmeake.css';
import '../../css/u/u-k87dwdf.css';
import '../../css/x/xyixtmbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="netsmeake"/><path class="u-k87dwdf"/><path class="xyixtmbhb"/></g>`,
		"fallback": "tabler:diabolo-off",
	});
}

export default Component;
