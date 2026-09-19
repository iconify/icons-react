import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pmmu4mbfd.css';
import '../../css/y/yxjb6vi-t.css';
import '../../css/f/fwq0gab4k.css';
import '../../css/g/g2isegifu.css';
import '../../css/d/d0-w9mbxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pmmu4mbfd"/><path class="yxjb6vi-t"/><path class="fwq0gab4k"/><path class="g2isegifu"/><path class="d0-w9mbxs"/></g>`,
		"fallback": "circle-flags:ag",
	});
}

export default Component;
