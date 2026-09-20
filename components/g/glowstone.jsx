import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl1-0k6eb.css';
import '../../css/j/jj9_iwbid.css';
import '../../css/s/s9gd7lbys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl1-0k6eb"/><path class="jj9_iwbid"/><path class="s9gd7lbys"/>`,
		"fallback": "selfhst:glowstone",
	});
}

export default Component;
