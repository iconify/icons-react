import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6v6g3zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6v6g3zs"/>`,
		"fallback": "eva:flag-outline",
	});
}

export default Component;
