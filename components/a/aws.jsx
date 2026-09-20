import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lclx3le1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lclx3le1w"/>`,
		"fallback": "lineicons:aws",
	});
}

export default Component;
