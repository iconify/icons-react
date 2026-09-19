import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzihj1__f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzihj1__f"/>`,
		"fallback": "hugeicons:arrow-expand-01",
	});
}

export default Component;
