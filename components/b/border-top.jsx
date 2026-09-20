import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krf3bhb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krf3bhb4i"/>`,
		"fallback": "tabler:border-top",
	});
}

export default Component;
