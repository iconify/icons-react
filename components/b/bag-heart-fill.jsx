import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r64ainbbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r64ainbbg"/>`,
		"fallback": "bi:bag-heart-fill",
	});
}

export default Component;
