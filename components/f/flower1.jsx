import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5k1d6waj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5k1d6waj"/>`,
		"fallback": "bi:flower1",
	});
}

export default Component;
