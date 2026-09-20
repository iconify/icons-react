import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc_bc1-ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc_bc1-ni"/>`,
		"fallback": "mingcute:certificate-line",
	});
}

export default Component;
