import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/azvap9d7m.css';
import '../../css/l/l9q28cc9j.css';
import '../../css/a/ah8f13bnz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="azvap9d7m"/><path class="l9q28cc9j"/><path class="ah8f13bnz"/></g>`,
		"fallback": "marketeq:couldron",
	});
}

export default Component;
