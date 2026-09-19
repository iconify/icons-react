import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fktd5968h.css';
import '../../css/o/on5ya1eyp.css';
import '../../css/a/acr5d_b4m.css';
import '../../css/k/ktf15dbcr.css';
import '../../css/d/d82fqrber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fktd5968h"/><path class="on5ya1eyp"/><path class="acr5d_b4m"/><path class="ktf15dbcr"/><path class="d82fqrber"/></g>`,
		"fallback": "circle-flags:au-act",
	});
}

export default Component;
