import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvbhxeusd.css';
import '../../css/a/acyb7c6vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rvbhxeusd"/><path class="acyb7c6vx"/></g>`,
		"fallback": "tabler:id-off",
	});
}

export default Component;
