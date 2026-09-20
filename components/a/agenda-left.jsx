import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xcfpei2wj.css';
import '../../css/l/l59fdgwlk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xcfpei2wj"/><path class="l59fdgwlk"/></g>`,
		"fallback": "marketeq:agenda-left",
	});
}

export default Component;
