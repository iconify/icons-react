import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rikp2ln1f.css';
import '../../css/m/mwasifbqi.css';
import '../../css/o/op4_3ybqn.css';
import '../../css/e/ehsb1bbur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rikp2ln1f"/><path class="mwasifbqi"/><path class="op4_3ybqn"/><path class="ehsb1bbur"/></g>`,
		"fallback": "circle-flags:gw",
	});
}

export default Component;
