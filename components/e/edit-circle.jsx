import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nq2bfjt_i.css';
import '../../css/m/m6bds7kfn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="nq2bfjt_i"/><path class="m6bds7kfn"/></g>`,
		"fallback": "marketeq:edit-circle",
	});
}

export default Component;
