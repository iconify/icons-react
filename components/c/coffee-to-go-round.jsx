import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bibsbeu0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bibsbeu0s"/>`,
		"fallback": "coolicons:coffee-to-go-round",
	});
}

export default Component;
