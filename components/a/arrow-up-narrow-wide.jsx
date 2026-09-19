import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4r_iy55d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4r_iy55d"/>`,
		"fallback": "hugeicons:arrow-up-narrow-wide",
	});
}

export default Component;
