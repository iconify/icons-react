import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pssxu37lo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pssxu37lo"/>`,
		"fallback": "bi:box",
	});
}

export default Component;
