import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnu2-k30d.css';
import '../../css/d/d6-na4hox.css';
import '../../css/u/uxt92d_4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mnu2-k30d"/><path class="d6-na4hox"/><path class="uxt92d_4o"/></g>`,
		"fallback": "tabler:exercise-ball",
	});
}

export default Component;
