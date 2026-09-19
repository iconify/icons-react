import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/p/p0ad9joga.css';
import '../../css/i/ihzozbb-k.css';
import '../../css/u/ud4hrkbmb.css';
import '../../css/p/p4n8cxu4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="p0ad9joga"/><path class="ihzozbb-k"/><path class="ud4hrkbmb"/><path class="p4n8cxu4v"/></g>`,
		"fallback": "circle-flags:et-so",
	});
}

export default Component;
