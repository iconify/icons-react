import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzz1d_bwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzz1d_bwy"/>`,
		"fallback": "game-icons:guatemala",
	});
}

export default Component;
