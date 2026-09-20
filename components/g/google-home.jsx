import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbowa9bhc.css';
import '../../css/c/cxfi88b7i.css';
import '../../css/d/dnop8sbwg.css';
import '../../css/s/sefv2fb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbowa9bhc"/><path class="cxfi88b7i"/><path class="dnop8sbwg"/><path class="sefv2fb_q"/>`,
		"fallback": "selfhst:google-home",
	});
}

export default Component;
