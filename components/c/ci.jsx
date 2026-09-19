import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/s8nnn_beg.css';
import '../../css/j/jg_vl_64z.css';
import '../../css/p/py0463bnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="s8nnn_beg"/><path class="jg_vl_64z"/><path class="py0463bnc"/></g>`,
		"fallback": "circle-flags:ci",
	});
}

export default Component;
