import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8zytob8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8zytob8f"/>`,
		"fallback": "coolicons:chevron-double-right-round",
	});
}

export default Component;
