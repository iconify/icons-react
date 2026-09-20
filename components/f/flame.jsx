import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-bjp6n_o.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-bjp6n_o"/>`,
		"fallback": "octicon:flame",
	});
}

export default Component;
