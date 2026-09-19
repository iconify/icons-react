import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exfxnbbze.css';
import '../../css/p/p1-cy4b1w.css';
import '../../css/a/a1bg4hbvb.css';
import '../../css/h/hv1t0udsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exfxnbbze"/><circle class="p1-cy4b1w"/><circle class="a1bg4hbvb"/><circle class="hv1t0udsq"/>`,
		"fallback": "ion:chatbubble-ellipses-outline",
	});
}

export default Component;
