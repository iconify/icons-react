import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6t2uhbxh.css';
import '../../css/r/rgizpj_4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6t2uhbxh"/><path class="rgizpj_4j"/></g>`,
		"fallback": "coolicons:bee-duocolor-round",
	});
}

export default Component;
