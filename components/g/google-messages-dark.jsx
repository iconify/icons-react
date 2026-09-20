import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nim0ecb_g.css';
import '../../css/m/m2lf37b_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nim0ecb_g"/><path class="m2lf37b_p"/>`,
		"fallback": "selfhst:google-messages-dark",
	});
}

export default Component;
