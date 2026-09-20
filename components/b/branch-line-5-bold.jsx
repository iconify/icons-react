import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrne95bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nrne95bef"/>`,
		"fallback": "streamline-ultimate:branch-line-5-bold",
	});
}

export default Component;
