import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/ou_g0jpvz.css';
import '../../css/y/yjfdgwb2a.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ou_g0jpvz"/><path class="yjfdgwb2a"/></g>`,
		"fallback": "marketeq:chassis",
	});
}

export default Component;
