import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmafncc0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmafncc0z"/>`,
		"fallback": "bi:basket3",
	});
}

export default Component;
