import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r4uaaccdm.css';
import '../../css/i/i-pixzbei.css';
import '../../css/b/brtenrbvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r4uaaccdm"/><path class="i-pixzbei"/><path class="brtenrbvd"/></g>`,
		"fallback": "circle-flags:es-vc",
	});
}

export default Component;
