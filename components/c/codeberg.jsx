import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stui2mbih.css';
import '../../css/b/bzk26nqsg.css';
import '../../css/l/llcf3srjo.css';
import '../../css/r/rnqpocbhp.css';
import '../../css/y/y113rzbyl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGt8xDWdVB" x1="254.7" x2="419.3" y1="132.2" y2="460.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="stui2mbih"/><stop offset=".495" class="bzk26nqsg"/><stop offset="1" class="llcf3srjo"/></linearGradient><path fill="url(#SVGt8xDWdVB)" class="rnqpocbhp"/><path class="y113rzbyl"/>`,
		"fallback": "selfhst:codeberg",
	});
}

export default Component;
