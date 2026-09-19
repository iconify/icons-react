import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/ae2skccmc.css';
import '../../css/w/w935400ub.css';
import '../../css/u/ub2yf6b_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ae2skccmc"/><path class="w935400ub"/><path class="ub2yf6b_n"/></g>`,
		"fallback": "circle-flags:ee",
	});
}

export default Component;
