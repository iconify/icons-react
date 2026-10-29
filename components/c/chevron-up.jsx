import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h364t7brs.css';
import '../../css/i/i2z-fkbgx.css';
import '../../css/v/vbn0d_b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h364t7brs wm-shadow"/><path class="i2z-fkbgx wm-k"/><path class="vbn0d_b5k wm-k"/>`,
		"fallback": "withicons-pastel:chevron-up",
	});
}

export default Component;
