import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbh0m6b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbh0m6b5f"/>`,
		"fallback": "noviair:frying-pan",
	});
}

export default Component;
