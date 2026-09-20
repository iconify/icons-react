import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2ppgm4pk.css';
import '../../css/e/e4bde_bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w2ppgm4pk"/><path class="e4bde_bqh"/></g>`,
		"fallback": "lucide:highlighter",
	});
}

export default Component;
