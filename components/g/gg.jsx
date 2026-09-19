import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v-b0ev6uo.css';
import '../../css/u/ut5rdbbgx.css';
import '../../css/r/r0j41j0oh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="v-b0ev6uo"/><path class="ut5rdbbgx"/><path class="r0j41j0oh"/></g>`,
		"fallback": "circle-flags:gg",
	});
}

export default Component;
