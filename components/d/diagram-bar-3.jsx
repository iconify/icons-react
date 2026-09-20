import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/uort4abkx.css';
import '../../css/u/updoovw1r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="uort4abkx"/><path class="updoovw1r"/></g>`,
		"fallback": "marketeq:diagram-bar-3",
	});
}

export default Component;
