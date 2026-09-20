import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wcn2l_k2r.css';
import '../../css/s/s9pr5ybjc.css';
import '../../css/h/hsaip4lhv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wcn2l_k2r"/><path class="s9pr5ybjc"/><path class="hsaip4lhv"/></g>`,
		"fallback": "marketeq:camping-gas",
	});
}

export default Component;
