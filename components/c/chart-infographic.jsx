import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vvxbjgbna.css';
import '../../css/z/z2dp0tcjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vvxbjgbna"/><path class="z2dp0tcjb"/></g>`,
		"fallback": "tabler:chart-infographic",
	});
}

export default Component;
