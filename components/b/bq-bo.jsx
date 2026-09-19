import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/dlejmac_f.css';
import '../../css/i/iadlwcc0p.css';
import '../../css/p/pbejrrbtb.css';
import '../../css/z/zdgvfvbkv.css';
import '../../css/r/r66aynbmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="dlejmac_f"/><path class="iadlwcc0p"/><path class="pbejrrbtb"/><path class="zdgvfvbkv"/><path class="r66aynbmu"/></g>`,
		"fallback": "circle-flags:bq-bo",
	});
}

export default Component;
