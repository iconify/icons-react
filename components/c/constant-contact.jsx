import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rngk_hb0z.css';
import '../../css/w/w-d_ndb4n.css';
import '../../css/d/dah1ttb-a.css';

const viewBox = {"width":42.5,"height":42.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="rngk_hb0z"/><path class="w-d_ndb4n"/><path class="dah1ttb-a"/></g>`,
		"fallback": "thesvg-color:constant-contact",
	});
}

export default Component;
