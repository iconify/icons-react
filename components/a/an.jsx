import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dpoetr4ls.css';
import '../../css/h/hp4489c2h.css';
import '../../css/t/t6e7xzbxe.css';
import '../../css/f/fcwhlzu5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="dpoetr4ls"/><path class="hp4489c2h"/><path class="t6e7xzbxe"/><path class="fcwhlzu5y"/></g>`,
		"fallback": "circle-flags:an",
	});
}

export default Component;
