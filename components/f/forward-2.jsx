import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hm78_eb8y.css';
import '../../css/h/ht__fdwps.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hm78_eb8y"/><path class="ht__fdwps"/></g>`,
		"fallback": "marketeq:forward-2",
	});
}

export default Component;
