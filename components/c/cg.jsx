import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/ng6koac6h.css';
import '../../css/o/oyzkpcclw.css';
import '../../css/y/yfudn8l_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ng6koac6h"/><path class="oyzkpcclw"/><path class="yfudn8l_e"/></g>`,
		"fallback": "circle-flags:cg",
	});
}

export default Component;
