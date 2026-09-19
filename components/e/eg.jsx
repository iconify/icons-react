import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e3s0is8tx.css';
import '../../css/u/ug0o9qbnm.css';
import '../../css/v/vwsqgnj8x.css';
import '../../css/r/r3ij0x-wy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="e3s0is8tx"/><path class="ug0o9qbnm"/><path class="vwsqgnj8x"/><path class="r3ij0x-wy"/></g>`,
		"fallback": "circle-flags:eg",
	});
}

export default Component;
