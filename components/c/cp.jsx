import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nnfv0rblz.css';
import '../../css/i/iw7_91opa.css';
import '../../css/p/pfurf2bom.css';
import '../../css/r/ryb_ukbgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="nnfv0rblz"/><path class="iw7_91opa"/><path class="pfurf2bom"/><path class="ryb_ukbgo"/></g>`,
		"fallback": "circle-flags:cp",
	});
}

export default Component;
