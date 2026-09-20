import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kba0yde4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kba0yde4p"/>`,
		"fallback": "si:flow-fill",
	});
}

export default Component;
