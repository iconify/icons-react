import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb-9tyb3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb-9tyb3l"/>`,
		"fallback": "roentgen:cocktail-glass-with-straw",
	});
}

export default Component;
