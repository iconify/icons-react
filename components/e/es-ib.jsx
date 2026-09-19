import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bl_52xb0t.css';
import '../../css/n/np5rx5hvg.css';
import '../../css/l/lt1n64b6s.css';
import '../../css/u/u6wj_zbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="bl_52xb0t"/><path class="np5rx5hvg"/><path class="lt1n64b6s"/><path class="u6wj_zbic"/></g>`,
		"fallback": "circle-flags:es-ib",
	});
}

export default Component;
