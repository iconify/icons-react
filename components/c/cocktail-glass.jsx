import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyofjvw_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyofjvw_r"/>`,
		"fallback": "roentgen:cocktail-glass",
	});
}

export default Component;
