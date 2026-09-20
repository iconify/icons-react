import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ur3fblbch.css';
import '../../css/k/k2tkjgb8m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ur3fblbch"/><path class="k2tkjgb8m"/></g>`,
		"fallback": "marketeq:gearshift-car",
	});
}

export default Component;
