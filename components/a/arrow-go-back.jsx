import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_u3aceh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce_u3aceh"/>`,
		"fallback": "humbleicons:arrow-go-back",
	});
}

export default Component;
