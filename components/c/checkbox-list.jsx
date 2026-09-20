import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/d/d1k0wbbmk.css';
import '../../css/t/t4y3w9obw.css';
import '../../css/c/cr9fx3got.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnsc5ccym"/><rect class="d1k0wbbmk"/><rect class="t4y3w9obw"/><rect class="cr9fx3got"/></g>`,
		"fallback": "majesticons:checkbox-list",
	});
}

export default Component;
