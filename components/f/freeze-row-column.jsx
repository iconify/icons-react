import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytwev7bvv.css';
import '../../css/r/rez3-jjwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ytwev7bvv"/><path class="rez3-jjwz"/></g>`,
		"fallback": "tabler:freeze-row-column",
	});
}

export default Component;
