import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/f/fg_t3bbbo.css';
import '../../css/v/v1quvlgyb.css';
import '../../css/i/i8k_orv2z.css';
import '../../css/h/h69rvacyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="fg_t3bbbo"/><path class="v1quvlgyb"/><path class="i8k_orv2z"/><path class="h69rvacyr"/></g>`,
		"fallback": "circle-flags:bl",
	});
}

export default Component;
