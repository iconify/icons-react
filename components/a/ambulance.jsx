import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fsjgrebom.css';
import '../../css/f/fbt8umbph.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fsjgrebom"/><path class="fbt8umbph"/></g>`,
		"fallback": "marketeq:ambulance",
	});
}

export default Component;
