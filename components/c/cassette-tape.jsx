import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/v/vlfpssodi.css';
import '../../css/l/l0v-b4kbr.css';
import '../../css/z/z4p6v5jwg.css';
import '../../css/w/wliih4mdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><circle class="vlfpssodi"/><path class="l0v-b4kbr"/><circle class="z4p6v5jwg"/><path class="wliih4mdw"/></g>`,
		"fallback": "lucide:cassette-tape",
	});
}

export default Component;
