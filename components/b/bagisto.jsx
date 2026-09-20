import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffpnvgb5x.css';
import '../../css/k/kozsj6bao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffpnvgb5x"/><path class="kozsj6bao"/>`,
		"fallback": "selfhst:bagisto",
	});
}

export default Component;
