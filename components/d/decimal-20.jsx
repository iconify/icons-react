import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-4szcb_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-4szcb_p"/>`,
		"fallback": "garden:decimal-20",
	});
}

export default Component;
