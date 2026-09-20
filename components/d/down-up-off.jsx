import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7rnc-b2i.css';
import '../../css/l/l_ozfcb5g.css';
import '../../css/h/htyeo47eu.css';
import '../../css/n/n97t2jq8e.css';
import '../../css/w/wb3xeub9v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u7rnc-b2i"/><path clip-rule="evenodd" class="l_ozfcb5g"/><path clip-rule="evenodd" class="htyeo47eu"/><path clip-rule="evenodd" class="n97t2jq8e"/><path clip-rule="evenodd" class="wb3xeub9v"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:down-up-off",
	});
}

export default Component;
