import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxm_c3b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxm_c3b0s"/>`,
		"fallback": "gridicons:image-multiple",
	});
}

export default Component;
