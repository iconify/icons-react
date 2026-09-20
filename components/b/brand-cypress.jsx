import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzal_wc8n.css';
import '../../css/n/ngqerwlvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzal_wc8n"/><path class="ngqerwlvu"/></g>`,
		"fallback": "tabler:brand-cypress",
	});
}

export default Component;
