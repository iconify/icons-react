import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pqiy-tb2f.css';
import '../../css/h/hc_yl3bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pqiy-tb2f"/><path class="hc_yl3bdp"/></g>`,
		"fallback": "tabler:hand-grab",
	});
}

export default Component;
