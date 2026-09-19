import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/ojywh4int.css';
import '../../css/i/iuaymw00j.css';
import '../../css/k/k1t61xbpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ojywh4int"/><path class="iuaymw00j"/><path class="k1t61xbpq"/></g>`,
		"fallback": "circle-flags:cw",
	});
}

export default Component;
