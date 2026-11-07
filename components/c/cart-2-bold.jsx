import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6p0bjl9n.css';
import '../../css/r/rkeqi4bgn.css';
import '../../css/d/d6_tdllfl.css';
import '../../css/p/pukxm4taj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6p0bjl9n"/><path class="rkeqi4bgn"/><path class="d6_tdllfl"/><path class="pukxm4taj"/>`,
		"fallback": "solar:cart-2-bold",
	});
}

export default Component;
