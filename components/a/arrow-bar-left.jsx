import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9_z50bzo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9_z50bzo"/>`,
		"fallback": "bi:arrow-bar-left",
	});
}

export default Component;
