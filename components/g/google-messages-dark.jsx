import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nim0ecb_g.css';
import '../../css/u/uio7vmi8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nim0ecb_g"/><path class="uio7vmi8h"/>`,
		"fallback": "selfhst:google-messages-dark",
	});
}

export default Component;
