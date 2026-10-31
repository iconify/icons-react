import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phr3gzdys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phr3gzdys"/>`,
		"fallback": "coolicons:flag-triangle-round",
	});
}

export default Component;
