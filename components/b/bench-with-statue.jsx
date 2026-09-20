import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq-tlin1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq-tlin1z"/>`,
		"fallback": "roentgen:bench-with-statue",
	});
}

export default Component;
