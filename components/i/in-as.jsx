import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/h/hva14dy6h.css';
import '../../css/g/gga_tfa_r.css';
import '../../css/j/jo5ihnk1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="hva14dy6h"/><rect class="gga_tfa_r"/><rect class="jo5ihnk1z"/></g>`,
		"fallback": "circle-flags:in-as",
	});
}

export default Component;
