import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx89wjbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx89wjbnq"/>`,
		"fallback": "si:ai-search-line",
	});
}

export default Component;
