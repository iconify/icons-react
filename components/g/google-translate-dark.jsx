import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no3pe0d-x.css';
import '../../css/c/c03hhtb_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no3pe0d-x"/><path class="c03hhtb_l"/>`,
		"fallback": "selfhst:google-translate-dark",
	});
}

export default Component;
