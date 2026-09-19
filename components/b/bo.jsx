import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/k301fvy4w.css';
import '../../css/i/ixc5v1_hg.css';
import '../../css/b/bkd3v89is.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="k301fvy4w"/><path class="ixc5v1_hg"/><path class="bkd3v89is"/></g>`,
		"fallback": "circle-flags:bo",
	});
}

export default Component;
