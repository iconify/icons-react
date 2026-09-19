import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gd9inehhp.css';
import '../../css/z/zzmzu9bzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGODUmedRR"><g class="hv130ab-t"><path clip-rule="evenodd" class="gd9inehhp"/><path class="zzmzu9bzw"/></g></mask></defs><path mask="url(#SVGODUmedRR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:drop-shadow-right",
	});
}

export default Component;
