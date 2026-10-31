import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0f0hbclg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0f0hbclg"/>`,
		"fallback": "coolicons:baby-round",
	});
}

export default Component;
