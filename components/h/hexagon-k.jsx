import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qoksnebsl.css';
import '../../css/p/pdz_t30dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qoksnebsl"/><path class="pdz_t30dw"/></g>`,
		"fallback": "tabler:hexagon-k",
	});
}

export default Component;
