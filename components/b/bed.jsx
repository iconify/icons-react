import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/par0qu_yq.css';
import '../../css/g/giswyoy8a.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="par0qu_yq"/><path class="giswyoy8a"/></g>`,
		"fallback": "marketeq:bed",
	});
}

export default Component;
