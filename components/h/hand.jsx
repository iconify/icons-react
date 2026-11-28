import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsb_k_b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsb_k_b0m"/>`,
		"fallback": "noviair-light:hand",
	});
}

export default Component;
