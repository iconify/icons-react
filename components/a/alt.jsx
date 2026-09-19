import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvh5-3bva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvh5-3bva"/>`,
		"fallback": "bi:alt",
	});
}

export default Component;
