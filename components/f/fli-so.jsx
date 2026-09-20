import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bov0584ws.css';
import '../../css/p/pcybz4e1f.css';
import '../../css/s/skc1clb-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bov0584ws"/><path class="pcybz4e1f"/><path class="skc1clb-z"/>`,
		"fallback": "selfhst:fli-so",
	});
}

export default Component;
