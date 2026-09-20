import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u7n78m30y.css';
import '../../css/n/ndvxg3usm.css';
import '../../css/r/rl5sxph5k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="u7n78m30y"/><path class="ndvxg3usm"/><path class="rl5sxph5k"/></g>`,
		"fallback": "marketeq:cloud",
	});
}

export default Component;
