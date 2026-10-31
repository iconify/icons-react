import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tgjy_ygpc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bw2nzbbmz.css';
import '../../css/i/i02d2-b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tgjy_ygpc"/><g class="mc2zb0bvp"><path class="bw2nzbbmz"/><circle class="i02d2-b-p"/></g></g>`,
		"fallback": "struq:gauge",
	});
}

export default Component;
