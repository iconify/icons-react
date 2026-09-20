import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvpl0v55c.css';
import '../../css/m/mqw_udb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yvpl0v55c"/><path class="mqw_udb7v"/></g>`,
		"fallback": "tabler:brand-elastic",
	});
}

export default Component;
