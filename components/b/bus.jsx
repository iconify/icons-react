import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pjl1_rn1g.css';
import '../../css/s/ssdrdhlvc.css';
import '../../css/l/l9j2af_qv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="pjl1_rn1g"/><path class="ssdrdhlvc"/><path class="l9j2af_qv"/></g>`,
		"fallback": "marketeq:bus",
	});
}

export default Component;
