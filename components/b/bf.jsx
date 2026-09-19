import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r8qbw6a5a.css';
import '../../css/g/gw67nib-g.css';
import '../../css/s/s07tpmuyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r8qbw6a5a"/><path class="gw67nib-g"/><path class="s07tpmuyx"/></g>`,
		"fallback": "circle-flags:bf",
	});
}

export default Component;
