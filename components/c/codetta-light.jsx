import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhur_sbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhur_sbgy"/>`,
		"fallback": "selfhst:codetta-light",
	});
}

export default Component;
