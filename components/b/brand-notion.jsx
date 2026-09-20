import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dvssgz61n.css';
import '../../css/e/enu23zbgq.css';
import '../../css/p/parzbjbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dvssgz61n"/><path class="enu23zbgq"/><path class="parzbjbsk"/></g>`,
		"fallback": "tabler:brand-notion",
	});
}

export default Component;
