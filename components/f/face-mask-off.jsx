import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cttnow96e.css';
import '../../css/l/ldf5ysizt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cttnow96e"/><path class="ldf5ysizt"/></g>`,
		"fallback": "tabler:face-mask-off",
	});
}

export default Component;
