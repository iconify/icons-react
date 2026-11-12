import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqa2gccsf.css';
import '../../css/n/nk8yrrb2k.css';
import '../../css/u/ua_s72b4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqa2gccsf"/><path class="nk8yrrb2k"/><path class="ua_s72b4g"/>`,
		"fallback": "selfhst:dockflare-dark",
	});
}

export default Component;
