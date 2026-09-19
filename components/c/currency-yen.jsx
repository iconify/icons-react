import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toaz7g1ty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toaz7g1ty"/>`,
		"fallback": "bi:currency-yen",
	});
}

export default Component;
