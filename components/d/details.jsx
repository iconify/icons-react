import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk_hy4r_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk_hy4r_t"/>`,
		"fallback": "tabler:details",
	});
}

export default Component;
