import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7k775b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7k775b_p"/>`,
		"fallback": "tabler:hash",
	});
}

export default Component;
