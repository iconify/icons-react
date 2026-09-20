import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/stddyeqmi.css';
import '../../css/k/kmlzac1gb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="stddyeqmi"/><path class="kmlzac1gb"/></g>`,
		"fallback": "marketeq:camping",
	});
}

export default Component;
