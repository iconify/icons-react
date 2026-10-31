import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ku_pfyb9v.css';
import '../../css/d/djg707lrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ku_pfyb9v"/><path class="djg707lrt"/></g>`,
		"fallback": "coolicons:database-duocolor-round",
	});
}

export default Component;
