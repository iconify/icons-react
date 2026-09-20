import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/no8jfdcat.css';
import '../../css/r/rn973_bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="no8jfdcat"/><path class="rn973_bqi"/></g>`,
		"fallback": "tabler:crystal-ball",
	});
}

export default Component;
