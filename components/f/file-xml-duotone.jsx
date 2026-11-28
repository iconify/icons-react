import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqhsfcyvd.css';
import '../../css/h/hiym8wbmg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqhsfcyvd"/><path class="hiym8wbmg"/></g>`,
		"fallback": "pullo:file-xml-duotone",
	});
}

export default Component;
