import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhaq2tbcu.css';
import '../../css/n/n1prgobsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhaq2tbcu"/><path class="n1prgobsq"/>`,
		"fallback": "selfhst:adobe-premiere-pro",
	});
}

export default Component;
