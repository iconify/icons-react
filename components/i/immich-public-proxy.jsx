import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2w31yeuo.css';
import '../../css/s/spxjt7bib.css';
import '../../css/o/oe550frae.css';
import '../../css/d/dzpywybjz.css';
import '../../css/e/e2e-xyzct.css';
import '../../css/s/s0223fb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2w31yeuo"/><path class="spxjt7bib"/><path class="oe550frae"/><path class="dzpywybjz"/><path class="e2e-xyzct"/><path class="s0223fb9m"/>`,
		"fallback": "selfhst:immich-public-proxy",
	});
}

export default Component;
