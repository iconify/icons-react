import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3tspm3_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3tspm3_i"/>`,
		"fallback": "hugeicons:deviantart",
	});
}

export default Component;
