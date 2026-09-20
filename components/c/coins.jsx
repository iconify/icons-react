import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p-nn7p34f.css';
import '../../css/e/eg-dtmkbo.css';
import '../../css/f/fyvi155ol.css';
import '../../css/t/tqnmtibrt.css';
import '../../css/c/cwrfew54d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p-nn7p34f"/><path class="eg-dtmkbo"/><path class="fyvi155ol"/><path class="tqnmtibrt"/><path class="cwrfew54d"/></g>`,
		"fallback": "pepicons-pencil:coins",
	});
}

export default Component;
