import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cao1pl0kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cao1pl0kz"/>`,
		"fallback": "coolicons:accessibility-round",
	});
}

export default Component;
