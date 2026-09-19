import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cn05-lgul.css';
import '../../css/r/rr0f87btl.css';
import '../../css/v/vuqm_bckz.css';
import '../../css/a/agakdmb2g.css';
import '../../css/m/mi650rwmx.css';
import '../../css/t/tyv1x6bjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cn05-lgul"/><path class="rr0f87btl"/><path class="vuqm_bckz"/><path class="agakdmb2g"/><path class="mi650rwmx"/><path class="tyv1x6bjv"/></g>`,
		"fallback": "circle-flags:gb-nir",
	});
}

export default Component;
