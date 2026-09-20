import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l41g2w51k.css';
import '../../css/w/w98s6ebmu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l41g2w51k"/><path class="w98s6ebmu"/>`,
		"fallback": "temaki:cross-country-skiing",
	});
}

export default Component;
