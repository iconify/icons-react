import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fu68vabvx.css';
import '../../css/m/mwx-_uq8u.css';
import '../../css/n/noo2m29ib.css';
import '../../css/p/pdarsunqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fu68vabvx"/><path class="mwx-_uq8u"/><path class="noo2m29ib"/><path class="pdarsunqf"/></g>`,
		"fallback": "circle-flags:gh",
	});
}

export default Component;
