import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/shrwr-09x.css';
import '../../css/p/p1a8k8bml.css';
import '../../css/r/rztdzfbve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="shrwr-09x"/><path class="p1a8k8bml"/><path class="rztdzfbve"/></g>`,
		"fallback": "circle-flags:dz",
	});
}

export default Component;
