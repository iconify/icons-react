import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_8s107tv.css';
import '../../css/h/h0qmttsvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_8s107tv"/><path class="h0qmttsvc"/>`,
		"fallback": "selfhst:docs-collaboration",
	});
}

export default Component;
