import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhie0q3xy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhie0q3xy"/>`,
		"fallback": "la:delicious",
	});
}

export default Component;
