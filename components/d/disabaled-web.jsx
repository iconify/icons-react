import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usf4j4iak.css';
import '../../css/s/swptt-y6m.css';
import '../../css/f/fv2774bvy.css';
import '../../css/f/f0a4gwbcn.css';
import '../../css/k/k___aiysz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcEY8sbxw"><g class="ft5dv1b6b"><path class="usf4j4iak"/><circle class="swptt-y6m"/><path class="fv2774bvy"/><path class="f0a4gwbcn"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/></g></mask></defs><path mask="url(#SVGcEY8sbxw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:disabaled-web",
	});
}

export default Component;
