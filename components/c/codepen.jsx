import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_v783b5i.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_v783b5i"/>`,
		"fallback": "zmdi:codepen",
	});
}

export default Component;
