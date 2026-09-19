import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fcz6x7bej.css';
import '../../css/d/d6o5xabkp.css';
import '../../css/p/pi4o_73rm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fcz6x7bej"/><path class="d6o5xabkp"/><path class="pi4o_73rm"/></g>`,
		"fallback": "circle-flags:ca",
	});
}

export default Component;
