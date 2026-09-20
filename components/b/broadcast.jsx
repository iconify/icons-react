import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6kqbx0kr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6kqbx0kr"/>`,
		"fallback": "memory:broadcast",
	});
}

export default Component;
