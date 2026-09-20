import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nngrh28lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nngrh28lc"/>`,
		"fallback": "mdi:fast-forward-10",
	});
}

export default Component;
