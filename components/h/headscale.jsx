import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6drnjb-n.css';
import '../../css/s/sfa1rc65h.css';
import '../../css/r/rt2xw8--p.css';
import '../../css/b/bo8_cj02q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="l6drnjb-n"/><path class="sfa1rc65h"/><path class="rt2xw8--p"/><path class="bo8_cj02q"/>`,
		"fallback": "selfhst:headscale",
	});
}

export default Component;
