import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/imaoi2b4g.css';
import '../../css/l/l0-geycet.css';
import '../../css/d/d_a7rc97c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="imaoi2b4g"/><path class="l0-geycet"/><path class="d_a7rc97c"/></g>`,
		"fallback": "circle-flags:ar",
	});
}

export default Component;
