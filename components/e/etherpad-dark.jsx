import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ego17gzid.css';
import '../../css/v/vu_nye9-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ego17gzid"/><path class="vu_nye9-y"/>`,
		"fallback": "selfhst:etherpad-dark",
	});
}

export default Component;
